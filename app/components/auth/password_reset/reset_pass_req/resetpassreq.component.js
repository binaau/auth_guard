"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var reset_pass_1 = require("~/services/reset_pass");
var router_2 = require("nativescript-angular/router");
var ResetPassReqComponent = /** @class */ (function () {
    function ResetPassReqComponent(formBuilder, resetservice, router, routerExtensions) {
        this.formBuilder = formBuilder;
        this.resetservice = resetservice;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.loading = false;
        this.invalidCredentials = false;
        this.ResetPasReqForm = this.formBuilder.group({
            personalid: ["", forms_1.Validators.required],
            email: ["", forms_1.Validators.required]
        });
    }
    ResetPassReqComponent.prototype.ngOnInit = function () { };
    ResetPassReqComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        console.log('JSON.stringify(this.signUpForm.value)');
        console.log(JSON.stringify(this.ResetPasReqForm.value));
        //this.result=true;
        this.resetservice.resetPasswordRequestt(this.ResetPasReqForm.controls['personalid'].value, this.ResetPasReqForm.controls['email'].value)
            .subscribe(function (result) {
            console.log('result login()');
            console.log(result);
            if (result === true) {
                _this.router.navigate(['/test/login']);
            }
            else {
                _this.loading = false;
                _this.invalidCredentials = true;
            }
        });
    };
    ResetPassReqComponent.prototype.goBack = function () {
        this.router.navigate(['/test/login1']);
        // this.routerExtensions.backToPreviousPage();
    };
    ResetPassReqComponent = __decorate([
        core_1.Component({
            selector: "resetpassreq-app",
            moduleId: module.id,
            templateUrl: "resetpassreq.component.html",
            styleUrls: ['resetpassreq.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, reset_pass_1.ResetService, router_1.Router, router_2.RouterExtensions])
    ], ResetPassReqComponent);
    return ResetPassReqComponent;
}());
exports.ResetPassReqComponent = ResetPassReqComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXRwYXNzcmVxLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc2V0cGFzc3JlcS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMEM7QUFDMUMsd0NBQW9FO0FBQ3BFLDBDQUF5QztBQUN6QyxvREFBcUQ7QUFDckQsc0RBQStEO0FBTy9EO0lBS0ksK0JBQW9CLFdBQXdCLEVBQVUsWUFBMEIsRUFBVSxNQUFjLEVBQVcsZ0JBQWtDO1FBQWpJLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUhySixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUdoQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNyQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLHdDQUFRLEdBQWYsY0FBb0IsQ0FBQztJQUNyQixzQ0FBTSxHQUFOO1FBQUEsaUJBcUJDO1FBcEJHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQ2pELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FDL0M7YUFDSSxTQUFTLENBQ04sVUFBQSxNQUFNO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDbkMsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQUNNLHNDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsOENBQThDO0lBQ2xELENBQUM7SUFyQ1EscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBTW1DLG1CQUFXLEVBQXdCLHlCQUFZLEVBQWtCLGVBQU0sRUFBNkIseUJBQWdCO09BTDVJLHFCQUFxQixDQXVDakM7SUFBRCw0QkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJlc2V0U2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3Jlc2V0X3Bhc3NcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJyZXNldHBhc3NyZXEtYXBwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicmVzZXRwYXNzcmVxLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsncmVzZXRwYXNzcmVxLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzUmVxQ29tcG9uZW50IHtcclxuICAgIFJlc2V0UGFzUmVxRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaW52YWxpZENyZWRlbnRpYWxzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcmVzZXRzZXJ2aWNlOiBSZXNldFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICB0aGlzLlJlc2V0UGFzUmVxRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBwZXJzb25hbGlkOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGVtYWlsOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHsgfVxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0pTT04uc3RyaW5naWZ5KHRoaXMuc2lnblVwRm9ybS52YWx1ZSknKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLlJlc2V0UGFzUmVxRm9ybS52YWx1ZSkpO1xyXG4gICAgICAgIC8vdGhpcy5yZXN1bHQ9dHJ1ZTtcclxuICAgICAgICB0aGlzLnJlc2V0c2VydmljZS5yZXNldFBhc3N3b3JkUmVxdWVzdHQoXHJcbiAgICAgICAgICAgIHRoaXMuUmVzZXRQYXNSZXFGb3JtLmNvbnRyb2xzWydwZXJzb25hbGlkJ10udmFsdWUsXHJcbiAgICAgICAgICAgIHRoaXMuUmVzZXRQYXNSZXFGb3JtLmNvbnRyb2xzWydlbWFpbCddLnZhbHVlXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0IGxvZ2luKCknKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Rlc3QvbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Rlc3QvbG9naW4xJ10pO1xyXG4gICAgICAgIC8vIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH1cclxuICAgIFxyXG59Il19