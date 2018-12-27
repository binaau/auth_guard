import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "~/components/auth/login/login_component";
import { RegisterComponent } from "~/components/auth/register_user/register_user";
import { AuthGuard } from "~/guard/auth.guard";
import { HomeComponent } from "~/components/home/home.component";
import { LoginFirstComponent } from "~/components/auth/login_first/login_first.component";
import { FirstPageComponent } from "~/components/first_page/first_page.component";
import { TestComponent } from "~/components/auth/test.component";
import { ResetPassReqComponent } from "./components/auth/password_reset/reset_pass_req/resetpassreq.component";
import { ResetPassIdComponent } from "./components/auth/password_reset/reset_pass/reset_pass.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'fp', component: FirstPageComponent
      }    
    ]
  },
  {
    path: 'test',
    component: TestComponent,
    children: [
      { path: 'login', component: LoginFirstComponent },
      { path: 'login1', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'usersforgetpassword', component: ResetPassReqComponent },
      { path: 'questions/:id',component: ResetPassIdComponent}

    ]
  },
  { path: '', redirectTo: '/home/fp', pathMatch: 'full' },

];

@NgModule({
  imports: [NativeScriptRouterModule, NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }