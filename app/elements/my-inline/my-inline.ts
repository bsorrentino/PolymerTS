/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>
﻿
@component("my-inline")

@template
(`
   <div>
      This element has been created completely from code
      <br>The prop is: <span>{{prop}}</span>
   </div>
`)

@style
(`
   :host {
      display: block;
   }

   div {
      color: red;
   }
`)

class MyInline extends polymer.Base implements polymer.Element
{
   @property({ value: "hi" })
   prop: string;
}

MyInline.register();
