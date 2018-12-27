"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { Http, URLSearchParams, Headers, Response } from '@angular/http';
//import * as ApplicationSettings from 'application-settings';
require("rxjs/operators");
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
var Api_1 = require("../state/Api");
var router_1 = require("@angular/router");
var Toast = require("nativescript-toast");
var router_2 = require("nativescript-angular/router");
//declare var Materialize: any;
var LoginService = /** @class */ (function () {
    function LoginService(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.currentUser = this.loadCurrentUser();
    }
    LoginService_1 = LoginService;
    LoginService.prototype.loginByUsernameAndPassword = function (username, password, token_device) {
        var _this = this;
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('token_device', token_device);
        urlSearchParams.append('user_uniqueIdid', '0');
        urlSearchParams.append('session_id', '0');
        var body = urlSearchParams.toString();
        var LS = require("nativescript-localstorage");
        console.log('body service');
        console.log(body);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(Api_1.Api.getUrl(Api_1.Api.URLS.Login_mobile), body, {
            headers: headers
        })
            .pipe(operators_1.map(function (response) {
            var res = response.json();
            console.log('res');
            console.log(res);
            if (res.StatusCode === 0 && res.Token) {
                _this.currentUser = {
                    username: username,
                    token: res.Token,
                    password: res.password
                };
                console.log('this.currentUser');
                console.log(_this.currentUser);
                LS.setItem(LoginService_1.CURRENT_USER, JSON.stringify(_this.currentUser));
                //          LS.getItem(LoginService.CURRENT_USER, JSON.stringify(this.currentUser));
                console.log('LoginService.CURRENT_USER, JSON.stringify(this.currentUser)');
                // console.log(LoginService.CURRENT_USER, JSON.stringify(this.currentUser))
                //localStorage.setItem(LoginService.CURRENT_USER, JSON.stringify(this.currentUser));
                Toast.makeText('Authentificate successfully').show();
                return true;
            }
            else if (res.StatusCode === 1) {
                Toast.makeText('Error descripton').show();
                return false;
            }
            else if (res.StatusCode === 2) {
                Toast.makeText('Parameters error').show();
                return false;
            }
            else if (res.StatusCode === 3) {
                Toast.makeText('Parameters error').show();
                return false;
            }
            else if (res.StatusCode === 6) {
                Toast.makeText('Login dështoj! Ju duhet të regjistroheni në fillim!').show();
                return false;
            }
            else if (res.StatusCode === 8) {
                Toast.makeText('Validation error').show();
                return false;
            }
            else {
                return false;
            }
        }));
    };
    LoginService.prototype.isAuthenticated = function () {
        var LS = require("nativescript-localstorage");
        var currentUser = LS.getItem(LoginService_1.CURRENT_USER);
        if (currentUser !== null) {
            try {
                currentUser = JSON.parse(currentUser);
                if (!currentUser.username !== undefined && !currentUser.password !== undefined &&
                    !currentUser.token !== undefined) {
                    return true;
                }
            }
            catch (ex) {
            }
        }
        return false;
    };
    LoginService.prototype.logout = function () {
        var LS = require("nativescript-localstorage");
        LS.removeItem(LoginService_1.CURRENT_USER);
        this.route.navigate(['/test/login']);
    };
    // public logout(): void {
    //   localStorage.removeItem(LoginService.CURRENT_USER);
    //   this.router.navigate(['/login']);
    // }
    // public staylogin(): void {
    //   let LS = require("nativescript-localstorage");
    //   if (LS.getItem(LoginService.CURRENT_USER)) {
    //     this.router.navigate(["/home/fp"])
    //   }
    //   console.log('this.loginservice.getCurrentUser().token')
    //   console.log(LoginService.CURRENT_USER)
    // }
    LoginService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    LoginService.prototype.loadCurrentUser = function () {
        var LS = require("nativescript-localstorage");
        var currentUser = LS.getItem(LoginService_1.CURRENT_USER);
        if (currentUser !== null) {
            try {
                currentUser = JSON.parse(currentUser);
                if (!currentUser.username !== undefined && !currentUser.password !== undefined &&
                    !currentUser.token !== undefined) {
                    return currentUser;
                }
            }
            catch (ex) {
            }
        }
        return null;
    };
    LoginService.CURRENT_USER = 'currentUser';
    LoginService = LoginService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router, router_2.RouterExtensions])
    ], LoginService);
    return LoginService;
    var LoginService_1;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywyRUFBMkU7QUFDM0UsOERBQThEO0FBRTlELDBCQUF3QjtBQUV4QixzQ0FBeUU7QUFDekUsNENBQXFDO0FBQ3JDLG9DQUFtQztBQUNuQywwQ0FBeUM7QUFDekMsMENBQTRDO0FBQzVDLHNEQUErRDtBQUUvRCwrQkFBK0I7QUFFL0I7SUFJRSxzQkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxLQUF1QjtRQUFuRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3JGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzVDLENBQUM7cUJBTlUsWUFBWTtJQVFoQixpREFBMEIsR0FBakMsVUFBa0MsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLFlBQW9CO1FBQTFGLGlCQThEQztRQTdEQyxJQUFJLGVBQWUsR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUU1QyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxlQUFlLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNyRCxlQUFlLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLGVBQWUsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUM5QyxPQUFP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ImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBIdHRwLCBVUkxTZWFyY2hQYXJhbXMsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbi8vaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQgJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi4vc3RhdGUvQXBpJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vZGVjbGFyZSB2YXIgTWF0ZXJpYWxpemU6IGFueTtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBDVVJSRU5UX1VTRVIgPSAnY3VycmVudFVzZXInO1xyXG4gIHByaXZhdGUgY3VycmVudFVzZXI6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5sb2FkQ3VycmVudFVzZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dpbkJ5VXNlcm5hbWVBbmRQYXNzd29yZCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCB0b2tlbl9kZXZpY2U6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgbGV0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuXHJcbiAgICB1cmxTZWFyY2hQYXJhbXMuYXBwZW5kKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcclxuICAgIHVybFNlYXJjaFBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xyXG4gICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZCgndG9rZW5fZGV2aWNlJywgdG9rZW5fZGV2aWNlKTtcclxuICAgIHVybFNlYXJjaFBhcmFtcy5hcHBlbmQoJ3VzZXJfdW5pcXVlSWRpZCcsICcwJyk7XHJcbiAgICB1cmxTZWFyY2hQYXJhbXMuYXBwZW5kKCdzZXNzaW9uX2lkJywgJzAnKTtcclxuICAgIGxldCBib2R5ID0gdXJsU2VhcmNoUGFyYW1zLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgTFMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKCdib2R5IHNlcnZpY2UnKVxyXG4gICAgY29uc29sZS5sb2coYm9keSlcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQXBpLmdldFVybChBcGkuVVJMUy5Mb2dpbl9tb2JpbGUpLCBib2R5LCB7XHJcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgIH0pXHJcbiAgICAgIC5waXBlKG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlcyA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzJylcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5TdGF0dXNDb2RlID09PSAwICYmIHJlcy5Ub2tlbikge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgICB0b2tlbjogcmVzLlRva2VuLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcmVzLnBhc3N3b3JkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5jdXJyZW50VXNlcicpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRVc2VyKVxyXG4gICAgICAgICAgTFMuc2V0SXRlbShMb2dpblNlcnZpY2UuQ1VSUkVOVF9VU0VSLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRVc2VyKSk7XHJcbiAgICAgICAgICAvLyAgICAgICAgICBMUy5nZXRJdGVtKExvZ2luU2VydmljZS5DVVJSRU5UX1VTRVIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY3VycmVudFVzZXIpKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpblNlcnZpY2UuQ1VSUkVOVF9VU0VSLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRVc2VyKScpXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhMb2dpblNlcnZpY2UuQ1VSUkVOVF9VU0VSLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRVc2VyKSlcclxuXHJcbiAgICAgICAgICAvL2xvY2FsU3RvcmFnZS5zZXRJdGVtKExvZ2luU2VydmljZS5DVVJSRU5UX1VTRVIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY3VycmVudFVzZXIpKTtcclxuICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdBdXRoZW50aWZpY2F0ZSBzdWNjZXNzZnVsbHknKS5zaG93KCk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHJlcy5TdGF0dXNDb2RlID09PSAwKSB7XHJcbiAgICAgICAgLy8gICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShBdXRoU2VydmljZS5DVVJSRU5UX1VTRVIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY3VycmVudFVzZXIpKTtcclxuICAgICAgICAvLyAgIFRvYXN0Lm1ha2VUZXh0KCdBdXRoZW50aWZpY2F0ZSBzdWNjZXNzZnVsbHknKS5zaG93KCk7XHJcbiAgICAgICAgLy8gICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHJlcy5TdGF0dXNDb2RlID09PSAxKSB7XHJcbiAgICAgICAgICBUb2FzdC5tYWtlVGV4dCgnRXJyb3IgZGVzY3JpcHRvbicpLnNob3coKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcy5TdGF0dXNDb2RlID09PSAyKSB7XHJcbiAgICAgICAgICBUb2FzdC5tYWtlVGV4dCgnUGFyYW1ldGVycyBlcnJvcicpLnNob3coKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcy5TdGF0dXNDb2RlID09PSAzKSB7XHJcbiAgICAgICAgICBUb2FzdC5tYWtlVGV4dCgnUGFyYW1ldGVycyBlcnJvcicpLnNob3coKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcy5TdGF0dXNDb2RlID09PSA2KSB7XHJcbiAgICAgICAgICBUb2FzdC5tYWtlVGV4dCgnTG9naW4gZMOrc2h0b2ohIEp1IGR1aGV0IHTDqyByZWdqaXN0cm9oZW5pIG7DqyBmaWxsaW0hJykuc2hvdygpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzLlN0YXR1c0NvZGUgPT09IDgpIHtcclxuICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdWYWxpZGF0aW9uIGVycm9yJykuc2hvdygpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IExTID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIik7XHJcbiAgICBsZXQgY3VycmVudFVzZXI6IGFueSA9IExTLmdldEl0ZW0oTG9naW5TZXJ2aWNlLkNVUlJFTlRfVVNFUik7XHJcbiAgICBpZiAoY3VycmVudFVzZXIgIT09IG51bGwpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjdXJyZW50VXNlciA9IEpTT04ucGFyc2UoY3VycmVudFVzZXIpO1xyXG4gICAgICAgIGlmICghY3VycmVudFVzZXIudXNlcm5hbWUgIT09IHVuZGVmaW5lZCAmJiAhY3VycmVudFVzZXIucGFzc3dvcmQgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgIWN1cnJlbnRVc2VyLnRva2VuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZ291dCgpOiB2b2lkIHtcclxuICAgIGxldCBMUyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG4gICAgTFMucmVtb3ZlSXRlbShMb2dpblNlcnZpY2UuQ1VSUkVOVF9VU0VSKTtcclxuICAgIHRoaXMucm91dGUubmF2aWdhdGUoWycvdGVzdC9sb2dpbiddKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgLy8gcHVibGljIGxvZ291dCgpOiB2b2lkIHtcclxuICAvLyAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKExvZ2luU2VydmljZS5DVVJSRU5UX1VTRVIpO1xyXG4gIC8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgLy8gfVxyXG4gIC8vIHB1YmxpYyBzdGF5bG9naW4oKTogdm9pZCB7XHJcbiAgLy8gICBsZXQgTFMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuICAvLyAgIGlmIChMUy5nZXRJdGVtKExvZ2luU2VydmljZS5DVVJSRU5UX1VTRVIpKSB7XHJcbiAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lL2ZwXCJdKVxyXG4gIC8vICAgfVxyXG4gIC8vICAgY29uc29sZS5sb2coJ3RoaXMubG9naW5zZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCkudG9rZW4nKVxyXG4gIC8vICAgY29uc29sZS5sb2coTG9naW5TZXJ2aWNlLkNVUlJFTlRfVVNFUilcclxuXHJcbiAgLy8gfVxyXG5cclxuICBwdWJsaWMgZ2V0Q3VycmVudFVzZXIoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkQ3VycmVudFVzZXIoKTogYW55IHtcclxuICAgIGxldCBMUyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xyXG4gICAgbGV0IGN1cnJlbnRVc2VyOiBhbnkgPSBMUy5nZXRJdGVtKExvZ2luU2VydmljZS5DVVJSRU5UX1VTRVIpO1xyXG4gICAgaWYgKGN1cnJlbnRVc2VyICE9PSBudWxsKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGN1cnJlbnRVc2VyKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyLnVzZXJuYW1lICE9PSB1bmRlZmluZWQgJiYgIWN1cnJlbnRVc2VyLnBhc3N3b3JkICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICFjdXJyZW50VXNlci50b2tlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gY3VycmVudFVzZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=