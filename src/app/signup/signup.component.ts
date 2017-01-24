import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    constructor(public MainService: MainServiceService) {

    }
    data = {
        email: "",
        password: ""
    }
    signup() {
        this.MainService.signup(this.data.email, this.data.password)
    }
    ngOnInit() {
    }

}
