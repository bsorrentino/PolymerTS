/// <reference path="../../polymer-ts.ts"/>
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
var FluidButton = (function (_super) {
    __extends(FluidButton, _super);
    function FluidButton() {
        _super.apply(this, arguments);
        this.longpress = false;
        this.presstimer = null;
        this.longtarget = null;
    }
    Object.defineProperty(FluidButton.prototype, "el", {
        get: function () {
            return this.$$("#fldbtn");
        },
        enumerable: true,
        configurable: true
    });
    FluidButton.prototype.cancel = function (ev) {
        console.log("up", ev);
        if (this.presstimer !== null) {
            clearTimeout(this.presstimer);
        }
        this.el.classList.remove("longpress");
    };
    FluidButton.prototype.click = function (ev) {
        console.log("down", ev);
        if (this.presstimer !== null) {
            clearTimeout(this.presstimer);
        }
        this.el.classList.remove("longpress");
        if (this.longpress) {
            return false;
        }
        this.fire("press", ev.detail);
    };
    FluidButton.prototype.start = function (ev) {
        var _this = this;
        console.log("tap", ev);
        var _ev = ev.detail.sourceEvent;
        if (_ev.type === "click" && _ev.button !== 0) {
            return;
        }
        this.longpress = false;
        this.el.classList.add("longpress");
        this.presstimer = setTimeout(function () {
            _this.longpress = true;
            _this.fire("longpress", ev.detail);
        }, 1000);
        return false;
    };
    FluidButton.prototype.ready = function () {
        var _this = this;
        console.log(this["is"], "ready!");
        this.async(function () {
            console.log("FluidButton async");
            _this.text = "HELLO!";
        }, 1000);
    };
    __decorate([
        property({ type: String, value: "" })
    ], FluidButton.prototype, "text");
    Object.defineProperty(FluidButton.prototype, "cancel",
        __decorate([
            listener("up")
        ], FluidButton.prototype, "cancel", Object.getOwnPropertyDescriptor(FluidButton.prototype, "cancel")));
    Object.defineProperty(FluidButton.prototype, "click",
        __decorate([
            listener("tap")
        ], FluidButton.prototype, "click", Object.getOwnPropertyDescriptor(FluidButton.prototype, "click")));
    Object.defineProperty(FluidButton.prototype, "start",
        __decorate([
            listener("down")
        ], FluidButton.prototype, "start", Object.getOwnPropertyDescriptor(FluidButton.prototype, "start")));
    FluidButton = __decorate([
        component("fluid-button")
    ], FluidButton);
    return FluidButton;
})(polymer.Base);
createElement(FluidButton);
