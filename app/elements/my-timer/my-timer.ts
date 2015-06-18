﻿
@component("my-timer")
class MyTimer implements PolymerElement
{
   @property({ type: Number, value: 0 })
   public start: number;

   public count: number;

   private timerHandle: number;

   ready() {
      console.log( this["is"], "ready!");

      this.count = this.start;
      this.timerHandle = setInterval(() => {
         this.count++;
      }, 1000);

   }

   detatched() {
      clearInterval(this.timerHandle);
   }
}

createElement( MyTimer );
