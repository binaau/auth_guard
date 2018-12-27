
import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
@Component({
  selector: "test-app",
  moduleId: module.id,
  templateUrl: "test.component.html"
})

export class TestComponent {
  constructor( public _page: Page) {
  }
  public ngOnInit() {
   this._page.actionBarHidden = true;
 }
}