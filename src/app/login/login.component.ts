import { Component, OnInit } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { MainServiceService } from '../main-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(
        private http: Http,
        public MainService: MainServiceService,
        private af: AngularFire
    ) {
        this.items = af.database.list('/items');
    }

    items: FirebaseListObservable<any[]>;
    data = {
        email: "",
        password: ""
    };
    ngOnInit() {
        this.af.auth.subscribe((data) => {
            console.log(data);
        })
    }

    login() {
        this.MainService.login(this.data.email, this.data.password)
    };
    // Social provider redirect
    twitterLogin() {
        this.MainService.twitterLogin()
    }
    githubLogin() {
        this.MainService.githubLogin()
    }
    googleLogin() {
        this.MainService.googleLogin()
    }
    facebookLogin() {
        this.MainService.facebookLogin()
    }
    logout() {
        this.MainService.logout()
    }


    httpCall = () => {
        this.http.get("http://country.io/names.json")
            .subscribe((val) => {
                console.log(val);
            })
    }
    signupCall = () => {
        var a = this.http.post(
            "https://e6sfbqyrbj.execute-api.us-east-1.amazonaws.com/dev/login",
            {//body
                "email": "abc@abc.com",
                "password": "aaa",
                "role": 2
            })
            .map(val => val)
            .subscribe((val) => {
                console.log(val);
            })
    }
}
