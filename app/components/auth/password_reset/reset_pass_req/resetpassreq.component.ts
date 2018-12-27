
import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "resetpassreq-app",
    moduleId: module.id,
    templateUrl: "resetpassreq.component.html",
    styleUrls: ['resetpassreq.component.css']
})
export class ResetPassReqComponent {
  
    constructor(private router: Router) {
    
    }
    public ngOnInit() { }

    public goBack() {
        this.router.navigate(['/test/login1']);
    }
    
}