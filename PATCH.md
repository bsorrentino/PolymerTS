fix the polymer distribution
bower_components/polymer/polymer-micro.html

Update function resolve()
===========================

function resolve() {
document.body.removeAttribute("unresolved");
}
if (window.WebComponents) {
addEventListener("WebComponentsReady", resolve);
} else {
try { resolve(); }catch(e) {} // added try catch
}
})();
