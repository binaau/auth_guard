"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.getUrl = function (url) {
        return Api.PROTOCOL + '://' + Api.DOMAIN + ':' + Api.PORT + '/' + Api.VERSION + '/' + url;
    };
    Api.PROTOCOL = 'http';
    Api.DOMAIN = '46.105.31.81';
    Api.PORT = '8083';
    Api.VERSION = 'v1';
    Api.URLS = {
        Login_mobile: 'Login_mobile',
        mobile_usersforgetpassword: 'mobile_usersforgetpassword',
        mobile_registergetdata: 'mobile_registergetdata',
        mobile_userschangepassword: 'mobile_userschangepassword',
        resetPasswordRequestt: 'resetPasswordRequest',
        resetPasswordd: 'resetPassword'
    };
    return Api;
}());
exports.Api = Api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQXFCQSxDQUFDO0lBSmUsVUFBTSxHQUFwQixVQUFxQixHQUFXO1FBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFNUYsQ0FBQztJQW5Cc0IsWUFBUSxHQUFXLE1BQU0sQ0FBQztJQUUzQixVQUFNLEdBQVcsY0FBYyxDQUFDO0lBQy9CLFFBQUksR0FBRyxNQUFNLENBQUM7SUFDZCxXQUFPLEdBQVcsSUFBSSxDQUFDO0lBRXZCLFFBQUksR0FBUTtRQUVqQyxZQUFZLEVBQUUsY0FBYztRQUM1QiwwQkFBMEIsRUFBQyw0QkFBNEI7UUFDdkQsc0JBQXNCLEVBQUMsd0JBQXdCO1FBQy9DLDBCQUEwQixFQUFDLDRCQUE0QjtRQUN2RCxxQkFBcUIsRUFBQyxzQkFBc0I7UUFDNUMsY0FBYyxFQUFFLGVBQWU7S0FDaEMsQ0FBQztJQU1KLFVBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxrQkFBRyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcGkge1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUFJPVE9DT0w6IHN0cmluZyA9ICdodHRwJztcclxuXHJcbiBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERPTUFJTjogc3RyaW5nID0gJzQ2LjEwNS4zMS44MSc7XHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBQT1JUID0gJzgwODMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVkVSU0lPTjogc3RyaW5nID0gJ3YxJztcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBVUkxTOiBhbnkgPSB7XHJcblxyXG4gICAgTG9naW5fbW9iaWxlOiAnTG9naW5fbW9iaWxlJyxcclxuICAgIG1vYmlsZV91c2Vyc2ZvcmdldHBhc3N3b3JkOidtb2JpbGVfdXNlcnNmb3JnZXRwYXNzd29yZCcsXHJcbiAgICBtb2JpbGVfcmVnaXN0ZXJnZXRkYXRhOidtb2JpbGVfcmVnaXN0ZXJnZXRkYXRhJyxcclxuICAgIG1vYmlsZV91c2Vyc2NoYW5nZXBhc3N3b3JkOidtb2JpbGVfdXNlcnNjaGFuZ2VwYXNzd29yZCcsXHJcbiAgICByZXNldFBhc3N3b3JkUmVxdWVzdHQ6J3Jlc2V0UGFzc3dvcmRSZXF1ZXN0JyxcclxuICAgIHJlc2V0UGFzc3dvcmRkOiAncmVzZXRQYXNzd29yZCdcclxuICB9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldFVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gQXBpLlBST1RPQ09MICsgJzovLycgKyBBcGkuRE9NQUlOICsgJzonICsgQXBpLlBPUlQgKyAnLycgKyBBcGkuVkVSU0lPTiArICcvJyArIHVybDtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==