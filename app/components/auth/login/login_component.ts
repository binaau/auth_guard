
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from "~/services/login";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector: "login-app",
    moduleId: module.id,
    templateUrl: "login_component.html",
    styleUrls: ['./login_component.css']
})
export class LoginComponent implements OnInit {
    signUpForm: FormGroup;
    loading: boolean = false;
    invalidCredentials: boolean = false;

    constructor(   
        private loginservice: LoginService,
        private router: Router
    ) {   }

    public ngOnInit() {
        if (this.loginservice.isAuthenticated()) {
            this.router.navigate(['/']);
        }
    }

    public goBack() {
        this.router.navigate(['/test/login']);
    }
}