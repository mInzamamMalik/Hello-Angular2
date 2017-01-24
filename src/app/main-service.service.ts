import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { PreloadingStrategy, Route, Router } from '@angular/router';


@Injectable()
export class MainServiceService {

    constructor(
        private af: AngularFire,
        private router: Router
    ) {
        console.log("abc");
    }
    signup(email, password) {
        return this.af.auth.createUser({ email: email, password: password })
            .then((user: any) => {
                var user = JSON.parse(JSON.stringify(user))// removing prototypes and making it plain object
                this.af.database.object('/users/' + user.uid).set(user);
                console.log(user);

                this.router.navigate(['/login']);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
    login(email, password) {
        this.af.auth.login(
            {
                email: email,
                password: password
            },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            });
    };
    // Social provider redirect
    twitterLogin() {
        this.af.auth.login({
            provider: AuthProviders.Twitter,
            method: AuthMethods.Redirect,
        });
    }
    githubLogin() {
        this.af.auth.login({
            provider: AuthProviders.Github,
            method: AuthMethods.Popup,
        });
    }
    googleLogin() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup,
        });
    }
    facebookLogin() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup,
        });
    }
    logout() {
        this.af.auth.logout();
    }

}
