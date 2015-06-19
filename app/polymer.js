// Type definitions for polymer v1.0
// Project: https://github.com/polymer
// Definitions by: Antonino Porcino <https://github.com/nippur72>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
var base = (function () {
    function base() {
    }
    base.prototype.arrayDelete = function (path, item) { };
    base.prototype.async = function (callback, waitTime) { };
    base.prototype.attachedCallback = function () { };
    base.prototype.attributeFollows = function (name, toElement, fromElement) { };
    base.prototype.cancelAsync = function (handle) { };
    base.prototype.cancelDebouncer = function (jobName) { };
    base.prototype.classFollows = function (name, toElement, fromElement) { };
    base.prototype.create = function (tag, props) { };
    base.prototype.debounce = function (jobName, callback, wait) { };
    base.prototype.deserialize = function (value, type) { };
    base.prototype.distributeContent = function () { };
    base.prototype.domHost = function () { };
    base.prototype.elementMatches = function (selector, node) { };
    base.prototype.fire = function (type, detail, options) { };
    base.prototype.flushDebouncer = function (jobName) { };
    base.prototype.get = function (path) { };
    base.prototype.getContentChildNodes = function (slctr) { };
    base.prototype.getContentChildren = function (slctr) { };
    base.prototype.getNativePrototype = function (tag) { };
    base.prototype.getPropertyInfo = function (property) { };
    base.prototype.importHref = function (href, onload, onerror) { };
    base.prototype.instanceTemplate = function (template) { };
    base.prototype.isDebouncerActive = function (jobName) { };
    base.prototype.linkPaths = function (to, from) { };
    base.prototype.listen = function (node, eventName, methodName) { };
    base.prototype.mixin = function (target, source) { };
    base.prototype.notifyPath = function (path, value, fromAbove) { };
    base.prototype.pop = function (path) { };
    base.prototype.push = function (path, value) { };
    base.prototype.reflectPropertyToAttribute = function (name) { };
    base.prototype.resolveUrl = function (url) { };
    base.prototype.scopeSubtree = function (container, shouldObserve) { };
    base.prototype.serialize = function (value) { };
    base.prototype.serializeValueToAttribute = function (value, attribute, node) { };
    base.prototype.set = function (path, value, root) { };
    base.prototype.setScrollDirection = function (direction, node) { };
    base.prototype.shift = function (path, value) { };
    base.prototype.splice = function (path, start, deleteCount) { };
    base.prototype.toggleAttribute = function (name, bool, node) { };
    base.prototype.toggleClass = function (name, bool, node) { };
    base.prototype.transform = function (transform, node) { };
    base.prototype.translate3d = function (x, y, z, node) { };
    base.prototype.unlinkPaths = function (path) { };
    base.prototype.unshift = function (path, value) { };
    base.prototype.updateStyles = function () { };
    return base;
})();
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
