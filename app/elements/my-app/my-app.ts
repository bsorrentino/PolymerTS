/// <reference path="../../polymer.ts"/>

@component("my-app")
class MyApplication implements PolymerElement {

  @listener("longpress")
  private longpress(e) {
    console.log("longpress", e);
  }

  ready() {

    console.log( this["is"], "ready!");
  }
}

createElement( MyApplication ) ;
