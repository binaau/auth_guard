import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { HttpModule } from "@angular/http";
//import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { LoginComponent } from "~/components/auth/login/login_component";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
//import { MainComponent } from "~/components/main/main_component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { LoginService } from "~/services/login";
import { RegisterComponent } from "~/components/auth/register_user/register_user";
//import { MainComponent } from "~/components/main/main_component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { AuthGuard } from "~/guard/auth.guard";
import { HomeComponent } from "~/components/home/home.component";
import { MenuBarComponent } from "~/components/template/menu_bar/menu_bar.component";
import { LoginFirstComponent } from "~/components/auth/login_first/login_first.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { FirstPageComponent } from "~/components/first_page/first_page.component";
import { AccordionModule } from "nativescript-accordion/angular";
import { MenuComponent } from "~/components/template/menu/menu.component";
import { TestComponent } from "~/components/auth/test.component";
import { MinLengthDirective, IsEmailDirective } from "./input.directive";
import { ResetPassReqComponent } from "./components/auth/password_reset/reset_pass_req/resetpassreq.component";
import { ResetPassIdComponent } from "./components/auth/password_reset/reset_pass/reset_pass.component";


// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
//import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        AccordionModule
        ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        MenuBarComponent,
        LoginFirstComponent,
        FirstPageComponent,
        MenuComponent,
        TestComponent,
        MinLengthDirective,
        IsEmailDirective,
        ResetPassReqComponent,
        ResetPassIdComponent
    ],
    providers: [
        BarcodeScanner,
        FormBuilder,
        LoginService,
        AuthGuard
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
