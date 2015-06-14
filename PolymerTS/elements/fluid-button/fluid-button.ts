/// <reference path="../../polymer.ts"/>

@tag("fluid-button")
class FluidButton extends CPolymerElement
{
   @property({ type: String, value: "" })
   public foo: string;


   private longpress = false;
   private presstimer = null;
   private longtarget = null;

   get el():HTMLElement {
     var pe:PolymerElement = <any>this;

     return pe.$$("#fldbtn");

   }

   @listener("up")
   private cancel(ev:CustomEvent) {
     console.log("up", ev);

     if(this.presstimer !== null) {
         clearTimeout(this.presstimer);
     }

     this.el.classList.remove("longpress");
   }

   @listener("tap")
   private click(ev:CustomEvent) {
     console.log("down", ev);

     if(this.presstimer !== null) {
         clearTimeout(this.presstimer);
     }


     this.el.classList.remove("longpress");

     if(this.longpress) {
         return false;
     }

     var pe:PolymerElement = <any>this;
     pe.fire("press", ev.detail);

   }

   @listener("down")
   private start(ev:CustomEvent) {

     console.log("tap", ev);

     var _ev = ev.detail.sourceEvent;

     if(_ev.type === "click" && _ev.button !== 0) {
         return;
     }

     this.longpress = false;

     this.el.classList.add("longpress");

     this.presstimer = setTimeout(() => {
         this.longpress = true;

         var pe:PolymerElement = <any>this;
         pe.fire("longpress", ev.detail);

     }, 1000);

     return false;

   }

   ready() {

       console.log( this["is"], "ready!");

       var pe:PolymerElement = <any>this;

       pe.async( ()=>{

         console.log( "FluidButton async");
         this.foo = "HELLO!";

       }, 1000);

   }


}

Register( FluidButton ) ;
