import { Component, OnInit } from "@angular/core";
import { handleOpenURL, AppURL } from 'nativescript-urlhandler';
import { Router } from "@angular/router";
import { LoginService } from "./services/login";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent implements OnInit {
    myappurl: any;
    private resetpasss: any;
    constructor(private router: Router, private auth: LoginService) {
    }

    ngOnInit() {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        handleOpenURL((appURL: AppURL) => {
            console.log('Got the following appURL', appURL);
            this.myappurl = appURL
            let url_1 = this.myappurl.toString();
            let url_id = url_1.split("/").reverse()[0];
            this.resetpasss = url_id
            this.router.navigateByUrl('/test/questions/' + this.resetpasss);
            console.log(this.resetpasss)
        });
    }
}
