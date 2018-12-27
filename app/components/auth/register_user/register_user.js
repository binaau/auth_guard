"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var register_user_service_1 = require("~/services/register_user.service");
var user_1 = require("~/model/user");
//import * as Toast from "nativescript-toast";
var router_2 = require("nativescript-angular/router");
var pushPlugin = require("nativescript-push-notifications");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, registerservice, router, routerExtensions) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.registerservice = registerservice;
        this.router = router;
        this.routerExtensions = routerExtensions;
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
        this.RegisterForm = this.formBuilder.group({
            password: ["", forms_1.Validators.compose([forms_1.Validators.minLength(6), forms_1.Validators.maxLength(50), forms_1.Validators.required])],
            barcode: ['', forms_1.Validators.required],
            username: ["", forms_1.Validators.required]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        var newRegister = this.RegisterForm.value;
        console.log(this.RegisterForm);
        newRegister.barcode = this.mybarcode;
        var user = new user_1.User(newRegister);
        this.registerservice.mobile_registergetdata(user).subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/home/fp']);
                _this.onRegisterButtonTap();
            }
            else {
                _this.loading = false;
                _this.invalidCredentials = true;
            }
        });
    };
    RegisterComponent.prototype.goBack = function () {
        this.router.navigate(['/test/login']);
        // this.routerExtensions.backToPreviousPage();
    };
    Object.defineProperty(RegisterComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                //this.notifyPropertyChange("message", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onCheckButtonTap = function () {
        var self = this;
        pushPlugin.areNotificationsEnabled(function (areEnabled) {
            self.updateMessage("Are Notifications enabled: " + !!areEnabled);
        });
    };
    RegisterComponent.prototype.onRegisterButtonTap = function () {
        var token = [];
        var self = this;
        pushPlugin.register(this.pushSettings, function (token) {
            self.updateMessage("Device registered. Access token: " + token);
            console.log('"Device registered. Access token: " + token');
            console.log("Device registered. Access token: " + token);
            // if (pushPlugin.registerUserNotificationSettings) {
            //     pushPlugin.registerUserNotificationSettings(() => {
            //         self.updateMessage("Successfully registered for interactive push.");
            //     }, (err) => {
            //         self.updateMessage("Error registering for interactive push: " + JSON.stringify(err));
            //     });
            // }
            console.log('token');
            console.log(token);
        }, function (errorMessage) {
            console.log(errorMessage);
            self.updateMessage(JSON.stringify(errorMessage));
        });
    };
    RegisterComponent.prototype.updateMessage = function (text) {
        this.message += text + "\n";
    };
    RegisterComponent.prototype.toggleShow = function () {
        this.passwordField.nativeElement.secure = !this.passwordField.nativeElement.secure;
    };
    __decorate([
        core_1.ViewChild('passwordField'),
        __metadata("design:type", core_1.ElementRef)
    ], RegisterComponent.prototype, "passwordField", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "register-app",
            moduleId: module.id,
            templateUrl: "register_user.html",
            styleUrls: ['./register_user.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, register_user_service_1.RegisterUserService, router_1.Router, router_2.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJfdXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyX3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBeUU7QUFDekUsd0NBQW9FO0FBQ3BFLDBDQUF5QztBQUN6QywwRUFBdUU7QUFDdkUscUNBQW9DO0FBQ3BDLDhDQUE4QztBQUM5QyxzREFBK0Q7QUFDL0QsNERBQThEO0FBUzlEO0lBUUksMkJBQW9CLFdBQXdCLEVBQVUsZUFBb0MsRUFBVSxNQUFjLEVBQVUsZ0JBQWtDO1FBQTlKLGlCQU9DO1FBUG1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFKOUosWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6Qix1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFvQzVCLGlCQUFZLEdBQUc7WUFDbkIsbUJBQW1CO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLDJCQUEyQixFQUFFLFVBQUMsZUFBdUIsRUFBRSxlQUFvQjtnQkFDdkUsSUFBTSxnQkFBZ0IsR0FBRyxlQUFlLElBQUksZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7Z0JBQzdCLEtBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLGVBQWUsQ0FBQyxDQUFDO1lBQzFGLENBQUM7U0FDSixDQUFDO1FBeENFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFFLENBQUMsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxT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Q0FBQyxFQUNHLFVBQUMsWUFBb0I7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDTyx5Q0FBYSxHQUFyQixVQUFzQixJQUFZO1FBQzlCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsc0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUN2RixDQUFDO0lBekYyQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBZ0IsaUJBQVU7NERBQUM7SUFON0MsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNyQyxDQUFDO3lDQVNtQyxtQkFBVyxFQUEyQiwyQ0FBbUIsRUFBa0IsZUFBTSxFQUE0Qix5QkFBZ0I7T0FSckosaUJBQWlCLENBaUc3QjtJQUFELHdCQUFDO0NBQUEsQUFqR0QsSUFpR0M7QUFqR1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9yZWdpc3Rlcl91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L21vZGVsL3VzZXJcIjtcclxuLy9pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIHB1c2hQbHVnaW4gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdXNoLW5vdGlmaWNhdGlvbnNcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInJlZ2lzdGVyLWFwcFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcInJlZ2lzdGVyX3VzZXIuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXJfdXNlci5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xyXG4gICAgUmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBteWJhcmNvZGU6IGFueTtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGludmFsaWRDcmVkZW50aWFsczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQFZpZXdDaGlsZCgncGFzc3dvcmRGaWVsZCcpIHBhc3N3b3JkRmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcmVnaXN0ZXJzZXJ2aWNlOiBSZWdpc3RlclVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICB0aGlzLlJlZ2lzdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBwYXNzd29yZDogW1wiXCIsIFZhbGlkYXRvcnMuY29tcG9zZSggW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDYpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MCksIFZhbGlkYXRvcnMucmVxdWlyZWRdKSBdLFxyXG4gICAgICAgICAgICBiYXJjb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbmV3UmVnaXN0ZXIgPSB0aGlzLlJlZ2lzdGVyRm9ybS52YWx1ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUmVnaXN0ZXJGb3JtKVxyXG4gICAgICAgIG5ld1JlZ2lzdGVyLmJhcmNvZGUgPSB0aGlzLm15YmFyY29kZTtcclxuICAgICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKG5ld1JlZ2lzdGVyKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyc2VydmljZS5tb2JpbGVfcmVnaXN0ZXJnZXRkYXRhKHVzZXIpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lL2ZwJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25SZWdpc3RlckJ1dHRvblRhcCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludmFsaWRDcmVkZW50aWFscyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90ZXN0L2xvZ2luJ10pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHB1c2hTZXR0aW5ncyA9IHtcclxuICAgICAgICAvLyBBbmRyb2lkIHNldHRpbmdzXHJcbiAgICAgICAgc2VuZGVySUQ6IFwiNjEwMzUzOTMxMDI4XCIsIC8vIEFuZHJvaWQ6IFJlcXVpcmVkIHNldHRpbmcgd2l0aCB0aGUgc2VuZGVyL3Byb2plY3QgbnVtYmVyXHJcbiAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkOiAoc3RyaW5naWZpZWREYXRhOiBTdHJpbmcsIGZjbU5vdGlmaWNhdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbkJvZHkgPSBmY21Ob3RpZmljYXRpb24gJiYgZmNtTm90aWZpY2F0aW9uLmdldEJvZHkoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobm90aWZpY2F0aW9uQm9keSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNZXNzYWdlKFwiTWVzc2FnZSByZWNlaXZlZCFcXG5cIiArIG5vdGlmaWNhdGlvbkJvZHkgKyBcIlxcblwiICsgc3RyaW5naWZpZWREYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgX21lc3NhZ2U6IHN0cmluZztcclxuICAgIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICBzZXQgbWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21lc3NhZ2UgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgLy90aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKFwibWVzc2FnZVwiLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DaGVja0J1dHRvblRhcCgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcHVzaFBsdWdpbi5hcmVOb3RpZmljYXRpb25zRW5hYmxlZCgoYXJlRW5hYmxlZDogQm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZU1lc3NhZ2UoXCJBcmUgTm90aWZpY2F0aW9ucyBlbmFibGVkOiBcIiArICEhYXJlRW5hYmxlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblJlZ2lzdGVyQnV0dG9uVGFwKCkge1xyXG4gICAgICAgIGxldCB0b2tlbiA9IFtdO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBwdXNoUGx1Z2luLnJlZ2lzdGVyKHRoaXMucHVzaFNldHRpbmdzLCAodG9rZW46IFN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZU1lc3NhZ2UoXCJEZXZpY2UgcmVnaXN0ZXJlZC4gQWNjZXNzIHRva2VuOiBcIiArIHRva2VuKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1wiRGV2aWNlIHJlZ2lzdGVyZWQuIEFjY2VzcyB0b2tlbjogXCIgKyB0b2tlbicpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV2aWNlIHJlZ2lzdGVyZWQuIEFjY2VzcyB0b2tlbjogXCIgKyB0b2tlbilcclxuICAgICAgICAgICAgLy8gaWYgKHB1c2hQbHVnaW4ucmVnaXN0ZXJVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgLy8gICAgIHB1c2hQbHVnaW4ucmVnaXN0ZXJVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNlbGYudXBkYXRlTWVzc2FnZShcIlN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkIGZvciBpbnRlcmFjdGl2ZSBwdXNoLlwiKTtcclxuICAgICAgICAgICAgLy8gICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZWxmLnVwZGF0ZU1lc3NhZ2UoXCJFcnJvciByZWdpc3RlcmluZyBmb3IgaW50ZXJhY3RpdmUgcHVzaDogXCIgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG9rZW4nKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3JNZXNzYWdlOiBTdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlTWVzc2FnZShKU09OLnN0cmluZ2lmeShlcnJvck1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVwZGF0ZU1lc3NhZ2UodGV4dDogU3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlICs9IHRleHQgKyBcIlxcblwiO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlU2hvdygpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkRmllbGQubmF0aXZlRWxlbWVudC5zZWN1cmUgPSAhdGhpcy5wYXNzd29yZEZpZWxkLm5hdGl2ZUVsZW1lbnQuc2VjdXJlO1xyXG4gICAgfVxyXG5cclxufSJdfQ==