var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MyTimer = (function () {
    function MyTimer() {
    }
    MyTimer.prototype.ready = function () {
        var _this = this;
        console.log(this['is'], 'ready!');
        this.count = this.start;
        this.timerHandle = setInterval(function () {
            _this.count++;
            console.log('count', _this.count);
        }, 1000);
    };
    MyTimer.prototype.detatched = function () {
        clearInterval(this.timerHandle);
    };
    __decorate([
        property({ type: Number, value: 0 }), 
        __metadata('design:type', Number)
    ], MyTimer.prototype, "start");
    __decorate([
        property(), 
        __metadata('design:type', Number)
    ], MyTimer.prototype, "count");
    MyTimer = __decorate([
        component('my-timer'), 
        __metadata('design:paramtypes', [])
    ], MyTimer);
    return MyTimer;
})();
createElement(MyTimer);
//# sourceMappingURL=my-timer.js.map