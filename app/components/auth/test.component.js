"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var TestComponent = /** @class */ (function () {
    function TestComponent(_page) {
        this._page = _page;
    }
    TestComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: "test-app",
            moduleId: module.id,
            templateUrl: "test.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFPL0I7SUFDRSx1QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07SUFDL0IsQ0FBQztJQUNNLGdDQUFRLEdBQWY7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUxXLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUJBQXFCO1NBQ25DLENBQUM7eUNBRzJCLFdBQUk7T0FEcEIsYUFBYSxDQU16QjtJQUFELG9CQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidGVzdC1hcHBcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcInRlc3QuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCBwdWJsaWMgX3BhZ2U6IFBhZ2UpIHtcclxuICB9XHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiB9XHJcbn0iXX0=