var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var MyBehaviour = (function (_super) {
    __extends(MyBehaviour, _super);
    function MyBehaviour() {
        _super.apply(this, arguments);
    }
    MyBehaviour.prototype.onBehave = function () {
        console.log("behave trigger");
    };
    Object.defineProperty(MyBehaviour.prototype, "onBehave",
        __decorate([
            listener("behave")
        ], MyBehaviour.prototype, "onBehave", Object.getOwnPropertyDescriptor(MyBehaviour.prototype, "onBehave")));
    MyBehaviour = __decorate([
        component("my-behaviour")
    ], MyBehaviour);
    return MyBehaviour;
})(polymer.Base);
var MyElement = (function (_super) {
    __extends(MyElement, _super);
    function MyElement() {
        _super.apply(this, arguments);
    }
    MyElement.prototype.handleClick = function () {
        this.test = this.test + "x";
        this.fire("behave");
    };
    MyElement.prototype.testChanged = function (newValue, oldValue) {
        console.log("test has changed from " + oldValue + " to " + newValue);
    };
    MyElement.prototype.test_and_test1_Changed = function (newTest, newTest1) {
        console.log("test=" + newTest + ", test1=" + newTest1);
    };
    MyElement.prototype.ready = function () {
        console.log(this["is"], " ready!");
    };
    __decorate([
        property({ type: String, value: "1024" })
    ], MyElement.prototype, "test");
    __decorate([
        property({ type: String, value: "2048" })
    ], MyElement.prototype, "test1");
    Object.defineProperty(MyElement.prototype, "testChanged",
        __decorate([
            observe("test")
        ], MyElement.prototype, "testChanged", Object.getOwnPropertyDescriptor(MyElement.prototype, "testChanged")));
    Object.defineProperty(MyElement.prototype, "test_and_test1_Changed",
        __decorate([
            observe("test,test1")
        ], MyElement.prototype, "test_and_test1_Changed", Object.getOwnPropertyDescriptor(MyElement.prototype, "test_and_test1_Changed")));
    MyElement = __decorate([
        component("my-element"),
        behavior(MyBehaviour)
    ], MyElement);
    return MyElement;
})(polymer.Base);
createElement(MyElement);
