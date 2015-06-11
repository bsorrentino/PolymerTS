// Type definitions for polymer v1.0
// Project: https://github.com/polymer
// Definitions by: Antonino Porcino <https://github.com/nippur72>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
function tag(tagname) {
    return function (target) {
        target.prototype["is"] = tagname;
    };
}
function extendsTag(tagname) {
    return function (target) {
        target.prototype["extends"] = tagname;
    };
}
function hostAttributes(attributes) {
    return function (target) {
        target.prototype["hostAttributes"] = attributes;
    };
}
function property(ob) {
    return function (target, propertyKey) {
        target.properties = target.properties || {};
        target.properties[propertyKey] = ob;
    };
}
function listener(eventName) {
    return function (target, propertyKey) {
        target.listeners = target.listeners || {};
        target.listeners[eventName] = propertyKey;
    };
}
function Register(element) {
    Polymer(element.prototype);
}
function RegisterClass(element) {
    Polymer.Class(element.prototype);
}
