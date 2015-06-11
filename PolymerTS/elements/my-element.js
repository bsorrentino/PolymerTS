var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var MyElement = (function () {
    function MyElement() {
    }
    MyElement.prototype.regularTap = function (e) {
        alert("Thank you for tapping");
    };
    __decorate([
        property({ type: String, value: "1024" })
    ], MyElement.prototype, "test");
    Object.defineProperty(MyElement.prototype, "regularTap",
        __decorate([
            listener("tap")
        ], MyElement.prototype, "regularTap", Object.getOwnPropertyDescriptor(MyElement.prototype, "regularTap")));
    MyElement = __decorate([
        tag("my-element")
    ], MyElement);
    return MyElement;
})();
