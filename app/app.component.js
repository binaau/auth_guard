"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_urlhandler_1 = require("nativescript-urlhandler");
var router_1 = require("@angular/router");
var login_1 = require("./services/login");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            return true;
        }
        nativescript_urlhandler_1.handleOpenURL(function (appURL) {
            console.log('Got the following appURL', appURL);
            _this.myappurl = appURL;
            var url_1 = _this.myappurl.toString();
            var url_id = url_1.split("/").reverse()[0];
            _this.resetpasss = url_id;
            _this.router.navigateByUrl('/test/resetPasswordRequest/' + _this.resetpasss);
            console.log(_this.resetpasss);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, login_1.LoginService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUVBQWdFO0FBQ2hFLDBDQUF5QztBQUN6QywwQ0FBZ0Q7QUFPaEQ7SUFHSSxzQkFBb0IsTUFBYyxFQUFVLElBQWtCO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFjO0lBQzlELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBYUM7UUFaRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCx1Q0FBYSxDQUFDLFVBQUMsTUFBYztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFBO1lBQ3RCLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQTtZQUN4QixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbkJRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FLOEIsZUFBTSxFQUFnQixvQkFBWTtPQUhyRCxZQUFZLENBb0J4QjtJQUFELG1CQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBoYW5kbGVPcGVuVVJMLCBBcHBVUkwgfSBmcm9tICduYXRpdmVzY3JpcHQtdXJsaGFuZGxlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dpblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG15YXBwdXJsOiBhbnk7XG4gICAgcHJpdmF0ZSByZXNldHBhc3NzOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhdXRoOiBMb2dpblNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlT3BlblVSTCgoYXBwVVJMOiBBcHBVUkwpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb3QgdGhlIGZvbGxvd2luZyBhcHBVUkwnLCBhcHBVUkwpO1xuICAgICAgICAgICAgdGhpcy5teWFwcHVybCA9IGFwcFVSTFxuICAgICAgICAgICAgbGV0IHVybF8xID0gdGhpcy5teWFwcHVybC50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IHVybF9pZCA9IHVybF8xLnNwbGl0KFwiL1wiKS5yZXZlcnNlKClbMF07XG4gICAgICAgICAgICB0aGlzLnJlc2V0cGFzc3MgPSB1cmxfaWRcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy90ZXN0L3Jlc2V0UGFzc3dvcmRSZXF1ZXN0LycgKyB0aGlzLnJlc2V0cGFzc3MpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNldHBhc3NzKVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=