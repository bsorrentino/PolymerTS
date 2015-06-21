// Type definitions for polymer v1.0
// Project: https://github.com/polymer
// Definitions by: Antonino Porcino <https://github.com/nippur72>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
var polymer;
(function (polymer) {
    var Base = (function () {
        function Base() {
        }
        Base.prototype.arrayDelete = function (path, item) { };
        Base.prototype.async = function (callback, waitTime) { };
        Base.prototype.attachedCallback = function () { };
        Base.prototype.attributeFollows = function (name, toElement, fromElement) { };
        Base.prototype.cancelAsync = function (handle) { };
        Base.prototype.cancelDebouncer = function (jobName) { };
        Base.prototype.classFollows = function (name, toElement, fromElement) { };
        Base.prototype.create = function (tag, props) { };
        Base.prototype.debounce = function (jobName, callback, wait) { };
        Base.prototype.deserialize = function (value, type) { };
        Base.prototype.distributeContent = function () { };
        Base.prototype.domHost = function () { };
        Base.prototype.elementMatches = function (selector, node) { };
        Base.prototype.fire = function (type, detail, options) { };
        Base.prototype.flushDebouncer = function (jobName) { };
        Base.prototype.get = function (path) { };
        Base.prototype.getContentChildNodes = function (slctr) { };
        Base.prototype.getContentChildren = function (slctr) { };
        Base.prototype.getNativePrototype = function (tag) { };
        Base.prototype.getPropertyInfo = function (property) { };
        Base.prototype.importHref = function (href, onload, onerror) { };
        Base.prototype.instanceTemplate = function (template) { };
        Base.prototype.isDebouncerActive = function (jobName) { };
        Base.prototype.linkPaths = function (to, from) { };
        Base.prototype.listen = function (node, eventName, methodName) { };
        Base.prototype.mixin = function (target, source) { };
        Base.prototype.notifyPath = function (path, value, fromAbove) { };
        Base.prototype.pop = function (path) { };
        Base.prototype.push = function (path, value) { };
        Base.prototype.reflectPropertyToAttribute = function (name) { };
        Base.prototype.resolveUrl = function (url) { };
        Base.prototype.scopeSubtree = function (container, shouldObserve) { };
        Base.prototype.serialize = function (value) { };
        Base.prototype.serializeValueToAttribute = function (value, attribute, node) { };
        Base.prototype.set = function (path, value, root) { };
        Base.prototype.setScrollDirection = function (direction, node) { };
        Base.prototype.shift = function (path, value) { };
        Base.prototype.splice = function (path, start, deleteCount) { };
        Base.prototype.toggleAttribute = function (name, bool, node) { };
        Base.prototype.toggleClass = function (name, bool, node) { };
        Base.prototype.transform = function (transform, node) { };
        Base.prototype.translate3d = function (x, y, z, node) { };
        Base.prototype.unlinkPaths = function (path) { };
        Base.prototype.unshift = function (path, value) { };
        Base.prototype.updateStyles = function () { };
        return Base;
    })();
    polymer.Base = Base;
})(polymer || (polymer = {}));
function component(tagname) {
    return function (target) {
        target.prototype["is"] = tagname;
    };
}
function extend(tagname) {
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
        if (typeof (target[propertyKey]) === "function") {
            var params = ob["computed"];
            var getterName = "get_computed_" + propertyKey;
            ob["computed"] = getterName + "(" + params + ")";
            target.properties[propertyKey] = ob;
            target[getterName] = target[propertyKey];
        }
        else {
            target.properties[propertyKey] = ob;
        }
    };
}
function computed(ob) {
    return function (target, computedFuncName) {
        target.properties = target.properties || {};
        var propOb = ob || {};
        var getterName = "get_computed_" + computedFuncName;
        var funcText = target[computedFuncName].toString();
        var start = funcText.indexOf("(");
        var end = funcText.indexOf(")");
        var propertiesList = funcText.substring(start + 1, end);
        propOb["computed"] = getterName + "(" + propertiesList + ")";
        target.properties[computedFuncName] = propOb;
        target[getterName] = target[computedFuncName];
    };
}
function listener(eventName) {
    return function (target, propertyKey) {
        target.listeners = target.listeners || {};
        target.listeners[eventName] = propertyKey;
    };
}
function behavior(behaviorObject) {
    return function (target) {
        if (typeof (target) === "function") {
            target.prototype["behaviors"] = target.prototype["behaviors"] || [];
            target.prototype["behaviors"].push(behaviorObject.prototype);
        }
        else {
            target.behaviors = target.behaviors || [];
            target.behaviors.push(behaviorObject.prototype);
        }
    };
}
function observe(propertiesList) {
    if (propertiesList.indexOf(",") > 0) {
        return function (target, observerFuncName) {
            target.observers = target.observers || [];
            target.observers.push(observerFuncName + "(" + propertiesList + ")");
        };
    }
    else {
        return function (target, observerName) {
            target.properties = target.properties || {};
            target.properties[propertiesList] = target.properties[propertiesList] || {};
            target.properties[propertiesList].observer = observerName;
        };
    }
}
function createElement(element) {
    Polymer(element.prototype);
}
function createClass(element) {
    Polymer.Class(element.prototype);
}
