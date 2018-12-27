
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "menu-app",
    moduleId: module.id,
    templateUrl: "menu.component.html",
    styleUrls: ['menu.component.css']

})
export class MenuComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {
    }
    public ngOnInit() {
    
    }
    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}