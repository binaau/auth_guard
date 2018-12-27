"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("~/components/auth/login/login_component");
var register_user_1 = require("~/components/auth/register_user/register_user");
var auth_guard_1 = require("~/guard/auth.guard");
var home_component_1 = require("~/components/home/home.component");
var login_first_component_1 = require("~/components/auth/login_first/login_first.component");
var first_page_component_1 = require("~/components/first_page/first_page.component");
var test_component_1 = require("~/components/auth/test.component");
var resetpassreq_component_1 = require("./components/auth/password_reset/reset_pass_req/resetpassreq.component");
var reset_pass_component_1 = require("./components/auth/password_reset/reset_pass/reset_pass.component");
var routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: 'fp', component: first_page_component_1.FirstPageComponent
            }
        ]
    },
    {
        path: 'test',
        component: test_component_1.TestComponent,
        children: [
            { path: 'login', component: login_first_component_1.LoginFirstComponent },
            { path: 'login1', component: login_component_1.LoginComponent },
            { path: 'register', component: register_user_1.RegisterComponent },
            { path: 'usersforgetpassword', component: resetpassreq_component_1.ResetPassReqComponent },
            { path: 'resetPasswordRequest/:id', component: reset_pass_component_1.ResetPassIdComponent }
        ]
    },
    { path: '', redirectTo: '/home/fp', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule, router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsMkVBQXlFO0FBQ3pFLCtFQUFrRjtBQUNsRixpREFBK0M7QUFDL0MsbUVBQWlFO0FBQ2pFLDZGQUEwRjtBQUMxRixxRkFBa0Y7QUFDbEYsbUVBQWlFO0FBQ2pFLGlIQUErRztBQUMvRyx5R0FBd0c7QUFHeEcsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSw4QkFBYTtRQUN4QixXQUFXLEVBQUUsQ0FBQyxzQkFBUyxDQUFDO1FBQ3hCLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLHlDQUFrQjthQUMxQztTQUNGO0tBQ0Y7SUFDRDtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDhCQUFhO1FBQ3hCLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7WUFDakQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO1lBQzdDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUNBQWlCLEVBQUU7WUFDbEQsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFFO1lBQ2pFLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFDLFNBQVMsRUFBRSwyQ0FBb0IsRUFBQztTQUVwRTtLQUNGO0lBQ0QsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtDQUV4RCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsRUFBRSxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0UsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbl9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL2F1dGgvcmVnaXN0ZXJfdXNlci9yZWdpc3Rlcl91c2VyXCI7XHJcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCJ+L2d1YXJkL2F1dGguZ3VhcmRcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2dpbkZpcnN0Q29tcG9uZW50IH0gZnJvbSBcIn4vY29tcG9uZW50cy9hdXRoL2xvZ2luX2ZpcnN0L2xvZ2luX2ZpcnN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGaXJzdFBhZ2VDb21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL2ZpcnN0X3BhZ2UvZmlyc3RfcGFnZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGVzdENvbXBvbmVudCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvYXV0aC90ZXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3NSZXFDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2F1dGgvcGFzc3dvcmRfcmVzZXQvcmVzZXRfcGFzc19yZXEvcmVzZXRwYXNzcmVxLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3NJZENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXV0aC9wYXNzd29yZF9yZXNldC9yZXNldF9wYXNzL3Jlc2V0X3Bhc3MuY29tcG9uZW50XCI7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJ2hvbWUnLFxyXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxyXG4gICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdmcCcsIGNvbXBvbmVudDogRmlyc3RQYWdlQ29tcG9uZW50XHJcbiAgICAgIH0gICAgXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndGVzdCcsXHJcbiAgICBjb21wb25lbnQ6IFRlc3RDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5GaXJzdENvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICdsb2dpbjEnLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDogJ3JlZ2lzdGVyJywgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxyXG4gICAgICB7IHBhdGg6ICd1c2Vyc2ZvcmdldHBhc3N3b3JkJywgY29tcG9uZW50OiBSZXNldFBhc3NSZXFDb21wb25lbnQgfSxcclxuICAgICAgeyBwYXRoOiAncmVzZXRQYXNzd29yZFJlcXVlc3QvOmlkJyxjb21wb25lbnQ6IFJlc2V0UGFzc0lkQ29tcG9uZW50fVxyXG5cclxuICAgIF1cclxuICB9LFxyXG4gIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvaG9tZS9mcCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcblxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=