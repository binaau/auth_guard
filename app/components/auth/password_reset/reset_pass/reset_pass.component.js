"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var reset_pass_1 = require("~/services/reset_pass");
var router_2 = require("@angular/router");
var ResetPassIdComponent = /** @class */ (function () {
    function ResetPassIdComponent(router, rs, fb, route) {
        this.router = router;
        this.rs = rs;
        this.fb = fb;
        this.route = route;
        this.invalidCredentials = false;
        this.loading = false;
    }
    ResetPassIdComponent.prototype.ngOnInit = function () {
        this.resetPasswordForm = this.fb.group({
            'password': new forms_1.FormControl('', forms_1.Validators.required),
            'personalid': new forms_1.FormControl('')
        });
        var myid = this.route.snapshot.paramMap.get("id");
        this.id = myid;
    };
    ResetPassIdComponent.prototype.onReset = function () {
        var _this = this;
        this.loading = true;
        console.log('test', this.resetPasswordForm.controls['password'].value, this.resetPasswordForm.controls['personalid'] = this.id);
        this.rs.resetPasswordd(this.resetPasswordForm.controls['password'].value, this.resetPasswordForm.controls['personalid'] = this.id)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/test/login']);
                //this.rs.passused();
            }
            else {
                _this.loading = false;
                _this.invalidCredentials = true;
            }
        }, function (error) {
            _this.loading = false;
            _this.invalidCredentials = true;
        });
    };
    ResetPassIdComponent.prototype.showPassword = function (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    };
    ResetPassIdComponent.prototype.goBack = function () {
        this.router.navigate(['/home/fp']);
    };
    ResetPassIdComponent.prototype.toggleShow = function () {
        this.passwordField.nativeElement.secure = !this.passwordField.nativeElement.secure;
    };
    __decorate([
        core_1.ViewChild('passwordField'),
        __metadata("design:type", core_1.ElementRef)
    ], ResetPassIdComponent.prototype, "passwordField", void 0);
    ResetPassIdComponent = __decorate([
        core_1.Component({
            selector: "resetpassIS-app",
            moduleId: module.id,
            templateUrl: "reset_pass.component.html",
            styleUrls: ['reset_pass.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, reset_pass_1.ResetService, forms_1.FormBuilder, router_2.ActivatedRoute])
    ], ResetPassIdComponent);
    return ResetPassIdComponent;
}());
exports.ResetPassIdComponent = ResetPassIdComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXRfcGFzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNldF9wYXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSx3Q0FBaUY7QUFDakYsMENBQXlDO0FBQ3pDLG9EQUFxRDtBQUNyRCwwQ0FBeUQ7QUFRekQ7SUFPRSw4QkFBb0IsTUFBYyxFQUFVLEVBQWdCLEVBQVUsRUFBZSxFQUFVLEtBQXFCO1FBQWhHLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFjO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSnBILHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxZQUFPLEdBQVksS0FBSyxDQUFDO0lBSXpCLENBQUM7SUFDRCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BELFlBQVksRUFBRSxJQUFJLG1CQUFXLENBQUMsRUFBRSxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDakIsQ0FBQztJQUVELHNDQUFPLEdBQVA7UUFBQSxpQkFvQkM7UUFuQkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDOUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUN6RyxTQUFTLENBQ1IsVUFBQSxNQUFNO1lBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDdEMscUJBQXFCO1lBQ3ZCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsS0FBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztZQUNqQyxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDakMsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQsMkNBQVksR0FBWixVQUFhLEtBQVU7UUFDckIsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDL0QsQ0FBQztJQUNNLHFDQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELHlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDdkYsQ0FBQztJQTVDNkI7UUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQWdCLGlCQUFVOytEQUFDO0lBTDNDLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQVE0QixlQUFNLEVBQWMseUJBQVksRUFBYyxtQkFBVyxFQUFpQix1QkFBYztPQVB6RyxvQkFBb0IsQ0FrRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJlc2V0U2VydmljZSB9IGZyb20gJ34vc2VydmljZXMvcmVzZXRfcGFzcyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwicmVzZXRwYXNzSVMtYXBwXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCJyZXNldF9wYXNzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbJ3Jlc2V0X3Bhc3MuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3NJZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaWQ6IGFueVxyXG4gIHJlc2V0UGFzc3dvcmRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgaW52YWxpZENyZWRlbnRpYWxzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ3Bhc3N3b3JkRmllbGQnKSBwYXNzd29yZEZpZWxkOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJzOiBSZXNldFNlcnZpY2UsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gIH1cclxuICBuZ09uSW5pdCgpOiBhbnkge1xyXG4gICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAncGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAncGVyc29uYWxpZCc6IG5ldyBGb3JtQ29udHJvbCgnJylcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBteWlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoXCJpZFwiKVxyXG4gICAgdGhpcy5pZCA9IG15aWQ7XHJcbiAgfVxyXG5cclxuICBvblJlc2V0KCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKCd0ZXN0JywgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWx1ZSx0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzWydwZXJzb25hbGlkJ10gPSB0aGlzLmlkKVxyXG4gICAgdGhpcy5ycy5yZXNldFBhc3N3b3JkZChcclxuICAgICAgdGhpcy5yZXNldFBhc3N3b3JkRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWx1ZSx0aGlzLnJlc2V0UGFzc3dvcmRGb3JtLmNvbnRyb2xzWydwZXJzb25hbGlkJ10gPSB0aGlzLmlkKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Rlc3QvbG9naW4nXSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ycy5wYXNzdXNlZCgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5pbnZhbGlkQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHNob3dQYXNzd29yZChpbnB1dDogYW55KTogYW55IHtcclxuICAgIGlucHV0LnR5cGUgPSBpbnB1dC50eXBlID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcclxuICB9XHJcbiAgcHVibGljIGdvQmFjaygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUvZnAnXSk7XHJcbiAgfVxyXG4gIHRvZ2dsZVNob3coKSB7XHJcbiAgICB0aGlzLnBhc3N3b3JkRmllbGQubmF0aXZlRWxlbWVudC5zZWN1cmUgPSAhdGhpcy5wYXNzd29yZEZpZWxkLm5hdGl2ZUVsZW1lbnQuc2VjdXJlO1xyXG59XHJcbn1cclxuIl19