"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var User = /** @class */ (function () {
    function User(obj) {
        if (obj) {
            console.log(obj);
            this.barcode = obj && obj.barcode;
            this.username = obj && obj.username;
            this.password = obj && obj.password;
            this.oldpassword = obj && obj.oldpassword;
            this.newpassword = obj && obj.newpassword;
        }
    }
    User.prototype.generateUrlencodedParameters = function () {
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('barcode', this.barcode);
        urlSearchParams.append('username', this.username);
        urlSearchParams.append('password', this.password);
        // urlSearchParams.append('token_device', this.token_device);
        return urlSearchParams.toString();
    };
    User.prototype.generateUrlencodedParametersChangePass = function (token) {
        var urlSearchParams = new http_1.URLSearchParams();
        urlSearchParams.append('oldpassword', this.oldpassword.toString());
        urlSearchParams.append('newpassword', this.newpassword.toString());
        urlSearchParams.append('token', token);
        return urlSearchParams.toString();
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFFaEQ7SUFRRSxjQUFZLEdBQVM7UUFDbkIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzVDLENBQUM7SUFDSCxDQUFDO0lBR00sMkNBQTRCLEdBQW5DO1FBQ0UsSUFBSSxlQUFlLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDNUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELGVBQWUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsNkRBQTZEO1FBRTdELE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNNLHFEQUFzQyxHQUE3QyxVQUE4QyxLQUFhO1FBQ3pELElBQUksZUFBZSxHQUFHLElBQUksc0JBQWUsRUFBRSxDQUFDO1FBQzVDLGVBQWUsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNuRSxlQUFlLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbkUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gIGJhcmNvZGU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgb2xkcGFzc3dvcmQ6IHN0cmluZztcclxuICBuZXdwYXNzd29yZDogc3RyaW5nO1xyXG4gIHRva2VuX2RldmljZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvYmo/OiBhbnkpIHtcclxuICAgIGlmIChvYmopIHtcclxuICAgICAgY29uc29sZS5sb2cob2JqKTtcclxuICAgICAgdGhpcy5iYXJjb2RlID0gb2JqICYmIG9iai5iYXJjb2RlO1xyXG4gICAgICB0aGlzLnVzZXJuYW1lID0gb2JqICYmIG9iai51c2VybmFtZTtcclxuICAgICAgdGhpcy5wYXNzd29yZCA9IG9iaiAmJiBvYmoucGFzc3dvcmQ7XHJcbiAgICAgIHRoaXMub2xkcGFzc3dvcmQgPSBvYmogJiYgb2JqLm9sZHBhc3N3b3JkO1xyXG4gICAgICB0aGlzLm5ld3Bhc3N3b3JkID0gb2JqICYmIG9iai5uZXdwYXNzd29yZDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVVcmxlbmNvZGVkUGFyYW1ldGVycygpOiBzdHJpbmcge1xyXG4gICAgbGV0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIHVybFNlYXJjaFBhcmFtcy5hcHBlbmQoJ2JhcmNvZGUnLCB0aGlzLmJhcmNvZGUpO1xyXG4gICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZCgndXNlcm5hbWUnLCB0aGlzLnVzZXJuYW1lKTtcclxuICAgIHVybFNlYXJjaFBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJywgdGhpcy5wYXNzd29yZCk7XHJcbiAgICAvLyB1cmxTZWFyY2hQYXJhbXMuYXBwZW5kKCd0b2tlbl9kZXZpY2UnLCB0aGlzLnRva2VuX2RldmljZSk7XHJcblxyXG4gICAgcmV0dXJuIHVybFNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2VuZXJhdGVVcmxlbmNvZGVkUGFyYW1ldGVyc0NoYW5nZVBhc3ModG9rZW46IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgdXJsU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZCgnb2xkcGFzc3dvcmQnLCB0aGlzLm9sZHBhc3N3b3JkLnRvU3RyaW5nKCkpO1xyXG4gICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZCgnbmV3cGFzc3dvcmQnLCB0aGlzLm5ld3Bhc3N3b3JkLnRvU3RyaW5nKCkpO1xyXG4gICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZCgndG9rZW4nLCB0b2tlbik7XHJcbiAgICByZXR1cm4gdXJsU2VhcmNoUGFyYW1zLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=