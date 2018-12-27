
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";


@Component({
    selector: "login_first-app",
    moduleId: module.id,
    templateUrl: "login_first.component.html",
    styleUrls: ['./login_first.component.css']
})
export class LoginFirstComponent implements OnInit {

    constructor(private router: Router,private _page: Page) {
  
    }
    public ngOnInit() {
    }
    login(){
        this.router.navigate(['/test/login1']);
    }
    register(){
        this.router.navigate(['/test/register']);
    }

}