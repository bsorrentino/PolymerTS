/// <reference path="../../polymer.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var MyApplication = (function () {
    function MyApplication() {
    }
    MyApplication.prototype.longpress = function (e) {
        console.log("longpress", e);
    };
    MyApplication.prototype.ready = function () {
        console.log(this["is"], "ready!");
    };
    Object.defineProperty(MyApplication.prototype, "longpress",
        __decorate([
            listener("longpress")
        ], MyApplication.prototype, "longpress", Object.getOwnPropertyDescriptor(MyApplication.prototype, "longpress")));
    MyApplication = __decorate([
        component("my-app")
    ], MyApplication);
    return MyApplication;
})();
createElement(MyApplication);
