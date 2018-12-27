
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";



@Component({
    selector: "register-app",
    moduleId: module.id,
    templateUrl: "register_user.html",
    styleUrls: ['./register_user.css']
})
export class RegisterComponent implements OnInit {

    constructor(private router: Router) {

    }
    public ngOnInit() {
    }

    public goBack() {
        this.router.navigate(['/test/login']);
    }

}