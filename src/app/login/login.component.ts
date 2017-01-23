import { Component, OnInit } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private http: Http) { }
    ngOnInit() {
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
