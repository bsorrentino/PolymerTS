/// <reference path="../../polymer.ts"/>

@tag("my-app")
class MyApplication implements IPolymerElement {

  @listener("longpress")
  private longpress(e) {
    console.log("longpress", e);
  }

  ready() {

    console.log( this["is"], "ready!");
  }
}

Register( MyApplication ) ;
