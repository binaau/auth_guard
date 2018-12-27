"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var LoginFirstComponent = /** @class */ (function () {
    function LoginFirstComponent(router, _page) {
        this.router = router;
        this._page = _page;
    }
    LoginFirstComponent.prototype.ngOnInit = function () {
    };
    LoginFirstComponent.prototype.login = function () {
        this.router.navigate(['/test/login1']);
    };
    LoginFirstComponent.prototype.register = function () {
        this.router.navigate(['/test/register']);
    };
    LoginFirstComponent = __decorate([
        core_1.Component({
            selector: "login_first-app",
            moduleId: module.id,
            templateUrl: "login_first.component.html",
            styleUrls: ['./login_first.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page])
    ], LoginFirstComponent);
    return LoginFirstComponent;
}());
exports.LoginFirstComponent = LoginFirstComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fZmlyc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5fZmlyc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFTL0I7SUFFSSw2QkFBb0IsTUFBYyxFQUFTLEtBQVc7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQU07SUFFdEQsQ0FBQztJQUNNLHNDQUFRLEdBQWY7SUFDQSxDQUFDO0lBQ0QsbUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFaUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDN0MsQ0FBQzt5Q0FHOEIsZUFBTSxFQUFnQixXQUFJO09BRjdDLG1CQUFtQixDQWMvQjtJQUFELDBCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImxvZ2luX2ZpcnN0LWFwcFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luX2ZpcnN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbl9maXJzdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luRmlyc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBfcGFnZTogUGFnZSkge1xyXG4gIFxyXG4gICAgfVxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG4gICAgbG9naW4oKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90ZXN0L2xvZ2luMSddKTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdGVzdC9yZWdpc3RlciddKTtcclxuICAgIH1cclxuXHJcbn0iXX0=