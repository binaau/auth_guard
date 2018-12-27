"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var http_1 = require("@angular/http");
//import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
var http_2 = require("@angular/common/http");
var http_3 = require("nativescript-angular/http");
var login_component_1 = require("~/components/auth/login/login_component");
var forms_1 = require("@angular/forms");
//import { MainComponent } from "~/components/main/main_component";
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_2 = require("nativescript-angular/forms");
var login_1 = require("~/services/login");
var reset_pass_1 = require("~/services/reset_pass");
var register_user_service_1 = require("~/services/register_user.service");
var register_user_1 = require("~/components/auth/register_user/register_user");
//import { MainComponent } from "~/components/main/main_component";
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-ui-listview/angular");
var auth_guard_1 = require("~/guard/auth.guard");
var home_component_1 = require("~/components/home/home.component");
var menu_bar_component_1 = require("~/components/template/menu_bar/menu_bar.component");
var login_first_component_1 = require("~/components/auth/login_first/login_first.component");
var side_drawer_directives_1 = require("nativescript-ui-sidedrawer/angular/side-drawer-directives");
var first_page_component_1 = require("~/components/first_page/first_page.component");
var angular_2 = require("nativescript-accordion/angular");
var menu_component_1 = require("~/components/template/menu/menu.component");
var test_component_1 = require("~/components/auth/test.component");
var input_directive_1 = require("./input.directive");
var resetpassreq_component_1 = require("./components/auth/password_reset/reset_pass_req/resetpassreq.component");
var reset_pass_component_1 = require("./components/auth/password_reset/reset_pass/reset_pass.component");
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
//import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                http_3.NativeScriptHttpModule,
                forms_2.NativeScriptFormsModule,
                forms_1.ReactiveFormsModule,
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUIListViewModule,
                side_drawer_directives_1.NativeScriptUISideDrawerModule,
                angular_2.AccordionModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_user_1.RegisterComponent,
                home_component_1.HomeComponent,
                menu_bar_component_1.MenuBarComponent,
                login_first_component_1.LoginFirstComponent,
                first_page_component_1.FirstPageComponent,
                menu_component_1.MenuComponent,
                test_component_1.TestComponent,
                input_directive_1.MinLengthDirective,
                input_directive_1.IsEmailDirective,
                resetpassreq_component_1.ResetPassReqComponent,
                reset_pass_component_1.ResetPassIdComponent
            ],
            providers: [
                nativescript_barcodescanner_1.BarcodeScanner,
                forms_1.FormBuilder,
                login_1.LoginService,
                reset_pass_1.ResetService,
                register_user_service_1.RegisterUserService,
                auth_guard_1.AuthGuard
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsMkVBQTZEO0FBQzdELHNDQUEyQztBQUMzQyxrRkFBa0Y7QUFDbEYsNkNBQXdEO0FBQ3hELGtEQUFtRTtBQUNuRSwyRUFBeUU7QUFDekUsd0NBQWtFO0FBQ2xFLG1FQUFtRTtBQUVuRSwyRUFBMkU7QUFDM0Usb0RBQXFFO0FBQ3JFLDBDQUFnRDtBQUNoRCxvREFBcUQ7QUFDckQsMEVBQXVFO0FBQ3ZFLCtFQUFrRjtBQUNsRixtRUFBbUU7QUFDbkUsc0RBQXVFO0FBQ3ZFLDREQUFnRjtBQUNoRixpREFBK0M7QUFDL0MsbUVBQWlFO0FBQ2pFLHdGQUFxRjtBQUNyRiw2RkFBMEY7QUFDMUYsb0dBQTJHO0FBQzNHLHFGQUFrRjtBQUNsRiwwREFBaUU7QUFDakUsNEVBQTBFO0FBQzFFLG1FQUFpRTtBQUNqRSxxREFBeUU7QUFDekUsaUhBQStHO0FBQy9HLHlHQUF3RztBQUd4Ryw2RUFBNkU7QUFDN0UscUVBQXFFO0FBaURyRTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUEvQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQixpQkFBVTtnQkFDVix1QkFBZ0I7Z0JBQ2hCLDZCQUFzQjtnQkFDdEIsK0JBQXVCO2dCQUN2QiwyQkFBbUI7Z0JBQ25CLGlDQUF3QjtnQkFDeEIsc0NBQTRCO2dCQUM1Qix1REFBOEI7Z0JBQzlCLHlCQUFlO2FBQ2Q7WUFDTCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QsaUNBQWlCO2dCQUNqQiw4QkFBYTtnQkFDYixxQ0FBZ0I7Z0JBQ2hCLDJDQUFtQjtnQkFDbkIseUNBQWtCO2dCQUNsQiw4QkFBYTtnQkFDYiw4QkFBYTtnQkFDYixvQ0FBa0I7Z0JBQ2xCLGtDQUFnQjtnQkFDaEIsOENBQXFCO2dCQUNyQiwyQ0FBb0I7YUFDdkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsNENBQWM7Z0JBQ2QsbUJBQVc7Z0JBQ1gsb0JBQVk7Z0JBQ1oseUJBQVk7Z0JBQ1osMkNBQW1CO2dCQUNuQixzQkFBUzthQUNaO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyXCI7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG4vL2ltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL2F1dGgvbG9naW4vbG9naW5fY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbi8vaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvbWFpbi9tYWluX2NvbXBvbmVudFwiO1xyXG5cclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2xvZ2luXCI7XHJcbmltcG9ydCB7IFJlc2V0U2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3Jlc2V0X3Bhc3NcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJVc2VyU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3JlZ2lzdGVyX3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvYXV0aC9yZWdpc3Rlcl91c2VyL3JlZ2lzdGVyX3VzZXJcIjtcclxuLy9pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSBcIn4vY29tcG9uZW50cy9tYWluL21haW5fY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwifi9ndWFyZC9hdXRoLmd1YXJkXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVudUJhckNvbXBvbmVudCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvdGVtcGxhdGUvbWVudV9iYXIvbWVudV9iYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luRmlyc3RDb21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL2F1dGgvbG9naW5fZmlyc3QvbG9naW5fZmlyc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyL3NpZGUtZHJhd2VyLWRpcmVjdGl2ZXNcIjtcclxuaW1wb3J0IHsgRmlyc3RQYWdlQ29tcG9uZW50IH0gZnJvbSBcIn4vY29tcG9uZW50cy9maXJzdF9wYWdlL2ZpcnN0X3BhZ2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjY29yZGlvbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYWNjb3JkaW9uL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvdGVtcGxhdGUvbWVudS9tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZXN0Q29tcG9uZW50IH0gZnJvbSBcIn4vY29tcG9uZW50cy9hdXRoL3Rlc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1pbkxlbmd0aERpcmVjdGl2ZSwgSXNFbWFpbERpcmVjdGl2ZSB9IGZyb20gXCIuL2lucHV0LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3NSZXFDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2F1dGgvcGFzc3dvcmRfcmVzZXQvcmVzZXRfcGFzc19yZXEvcmVzZXRwYXNzcmVxLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3NJZENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXV0aC9wYXNzd29yZF9yZXNldC9yZXNldF9wYXNzL3Jlc2V0X3Bhc3MuY29tcG9uZW50XCI7XHJcblxyXG5cclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcclxuLy9pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICAgICAgQWNjb3JkaW9uTW9kdWxlXHJcbiAgICAgICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIE1lbnVCYXJDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5GaXJzdENvbXBvbmVudCxcclxuICAgICAgICBGaXJzdFBhZ2VDb21wb25lbnQsXHJcbiAgICAgICAgTWVudUNvbXBvbmVudCxcclxuICAgICAgICBUZXN0Q29tcG9uZW50LFxyXG4gICAgICAgIE1pbkxlbmd0aERpcmVjdGl2ZSxcclxuICAgICAgICBJc0VtYWlsRGlyZWN0aXZlLFxyXG4gICAgICAgIFJlc2V0UGFzc1JlcUNvbXBvbmVudCxcclxuICAgICAgICBSZXNldFBhc3NJZENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEJhcmNvZGVTY2FubmVyLFxyXG4gICAgICAgIEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIExvZ2luU2VydmljZSxcclxuICAgICAgICBSZXNldFNlcnZpY2UsXHJcbiAgICAgICAgUmVnaXN0ZXJVc2VyU2VydmljZSxcclxuICAgICAgICBBdXRoR3VhcmRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==