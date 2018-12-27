"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var login_1 = require("~/services/login");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var Toast = require("nativescript-toast");
var pushPlugin = require("nativescript-push-notifications");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, loginservice, router, route) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.loginservice = loginservice;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.invalidCredentials = false;
        this.pushSettings = {
            // Android settings
            senderID: "610353931028",
            notificationCallbackAndroid: function (stringifiedData, fcmNotification) {
                var notificationBody = fcmNotification && fcmNotification.getBody();
                console.log(notificationBody);
                _this.updateMessage("Message received!\n" + notificationBody + "\n" + stringifiedData);
            },
        };
        this.signUpForm = this.formBuilder.group({
            username: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
        this.message = "";
        this.updateMessage("App started.");
        var self = this;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.loginservice.isAuthenticated()) {
            this.router.navigate(['/']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var self = this;
        this.loading = true;
        var login = this.signUpForm.value;
        pushPlugin.register(this.pushSettings, function (token) {
            self.updateMessage("Device registered. Access token: " + token);
            _this.loginservice.loginByUsernameAndPassword(_this.signUpForm.controls['username'].value, _this.signUpForm.controls['password'].value, login.token_device = token).subscribe(function (result) {
                if (result === true) {
                    _this.route.navigate(['/home/fp']);
                    var LS = require("nativescript-localstorage");
                    LS.setItem(_this.loginservice.getCurrentUser().token && _this.loginservice.getCurrentUser().username);
                    // this.onRegisterButtonTap();
                }
                else {
                    _this.loading = false;
                    _this.invalidCredentials = true;
                }
            }, function (error) {
                _this.loading = false;
                _this.invalidCredentials = true;
                Toast.makeText('Ju nuk keni internet!').show();
            });
        }, function (errorMessage) {
            console.log('errorMessage', errorMessage);
            self.updateMessage(JSON.stringify(errorMessage));
        });
    };
    LoginComponent.prototype.goBack = function () {
        this.router.navigate(['/test/login']);
    };
    Object.defineProperty(LoginComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.updateMessage = function (text) {
        this.message += text + "\n";
    };
    LoginComponent.prototype.toggleShow = function () {
        this.passwordField.nativeElement.secure = !this.passwordField.nativeElement.secure;
    };
    __decorate([
        core_1.ViewChild('passwordField'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "passwordField", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login-app",
            moduleId: module.id,
            templateUrl: "login_component.html",
            styleUrls: ['./login_component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            login_1.LoginService,
            router_1.Router,
            router_2.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5fY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQXlFO0FBQ3pFLHdDQUFvRTtBQUNwRSwwQ0FBZ0Q7QUFDaEQsMENBQXlDO0FBQ3pDLHNEQUErRDtBQUMvRCwwQ0FBNEM7QUFDNUMsNERBQThEO0FBUTlEO0lBT0ksd0JBQ1ksV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsTUFBYyxFQUNkLEtBQXVCO1FBSm5DLGlCQWFDO1FBWlcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBVG5DLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBaUU1QixpQkFBWSxHQUFHO1lBQ25CLG1CQUFtQjtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QiwyQkFBMkIsRUFBRSxVQUFDLGVBQXVCLEVBQUUsZUFBb0I7Z0JBQ3ZFLElBQU0sZ0JBQWdCLEdBQUcsZUFBZSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2dCQUM3QixLQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixHQUFHLGdCQUFnQixHQUFHLElBQUksR0FBRyxlQUFlLENBQUMsQ0FBQztZQUMxRixDQUFDO1NBQ0osQ0FBQztRQS9ERSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFD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Q0FBQzs7O09BTkE7SUFRTyxzQ0FBYSxHQUFyQixVQUFzQixJQUFZO1FBQzlCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0QsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUN2RixDQUFDO0lBekYyQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBZ0IsaUJBQVU7eURBQUM7SUFMN0MsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FTMkIsbUJBQVc7WUFDVixvQkFBWTtZQUNsQixlQUFNO1lBQ1AseUJBQWdCO09BWDFCLGNBQWMsQ0ErRjFCO0lBQUQscUJBQUM7Q0FBQSxBQS9GRCxJQStGQztBQS9GWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbG9naW5cIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XHJcbmltcG9ydCAqIGFzIHB1c2hQbHVnaW4gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdXNoLW5vdGlmaWNhdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibG9naW4tYXBwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW5fY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luX2NvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc2lnblVwRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaW52YWxpZENyZWRlbnRpYWxzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgncGFzc3dvcmRGaWVsZCcpIHBhc3N3b3JkRmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dpbnNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuc2lnblVwRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoXCJBcHAgc3RhcnRlZC5cIik7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2dpbnNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbG9naW4gPSB0aGlzLnNpZ25VcEZvcm0udmFsdWVcclxuICAgICAgICBwdXNoUGx1Z2luLnJlZ2lzdGVyKHRoaXMucHVzaFNldHRpbmdzLCAodG9rZW4pID0+IHtcclxuICAgICAgICAgICAgc2VsZi51cGRhdGVNZXNzYWdlKFwiRGV2aWNlIHJlZ2lzdGVyZWQuIEFjY2VzcyB0b2tlbjogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5zZXJ2aWNlLmxvZ2luQnlVc2VybmFtZUFuZFBhc3N3b3JkKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWduVXBGb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWduVXBGb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbG9naW4udG9rZW5fZGV2aWNlID0gdG9rZW5cclxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbJy9ob21lL2ZwJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgTFMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTFMuc2V0SXRlbSh0aGlzLmxvZ2luc2VydmljZS5nZXRDdXJyZW50VXNlcigpLnRva2VuICYmIHRoaXMubG9naW5zZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCkudXNlcm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMub25SZWdpc3RlckJ1dHRvblRhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludmFsaWRDcmVkZW50aWFscyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludmFsaWRDcmVkZW50aWFscyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoJ0p1IG51ayBrZW5pIGludGVybmV0IScpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3JNZXNzYWdlOiBTdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvck1lc3NhZ2UnLCBlcnJvck1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZU1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVzdC9sb2dpbiddKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHB1c2hTZXR0aW5ncyA9IHtcclxuICAgICAgICAvLyBBbmRyb2lkIHNldHRpbmdzXHJcbiAgICAgICAgc2VuZGVySUQ6IFwiNjEwMzUzOTMxMDI4XCIsIC8vIEFuZHJvaWQ6IFJlcXVpcmVkIHNldHRpbmcgd2l0aCB0aGUgc2VuZGVyL3Byb2plY3QgbnVtYmVyXHJcbiAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkOiAoc3RyaW5naWZpZWREYXRhOiBTdHJpbmcsIGZjbU5vdGlmaWNhdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbkJvZHkgPSBmY21Ob3RpZmljYXRpb24gJiYgZmNtTm90aWZpY2F0aW9uLmdldEJvZHkoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobm90aWZpY2F0aW9uQm9keSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNZXNzYWdlKFwiTWVzc2FnZSByZWNlaXZlZCFcXG5cIiArIG5vdGlmaWNhdGlvbkJvZHkgKyBcIlxcblwiICsgc3RyaW5naWZpZWREYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fbWVzc2FnZSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZU1lc3NhZ2UodGV4dDogU3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlICs9IHRleHQgKyBcIlxcblwiO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlU2hvdygpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkRmllbGQubmF0aXZlRWxlbWVudC5zZWN1cmUgPSAhdGhpcy5wYXNzd29yZEZpZWxkLm5hdGl2ZUVsZW1lbnQuc2VjdXJlO1xyXG4gICAgfVxyXG59Il19