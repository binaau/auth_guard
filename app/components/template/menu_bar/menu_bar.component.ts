
import { Component, OnInit } from "@angular/core";
@Component({
    selector: "menubar-app",
    moduleId: module.id,
    templateUrl: "menu_bar.component.html",
    styleUrls: ['menu_bar.component.css']

})
export class MenuBarComponent implements OnInit {
    selectedMenuItemId: string;
    constructor() {
        this.selectedMenuItemId = "home";
    }
    public ngOnInit() {

    }
}