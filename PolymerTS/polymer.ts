// Type definitions for polymer v1.0
// Project: https://github.com/polymer
// Definitions by: Antonino Porcino <https://github.com/nippur72>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Polymer
{
   (prototype: PolymerElement): Function;
   Class(prototype: PolymerElement): Function;
   dom(node: HTMLElement): HTMLElement;
}

declare var Polymer: Polymer;

interface IPolymerElement
{
   properties?: Object;
   listeners?: Object;

  // lifecycle
  factoryImpl? (): void;
	ready? (): void;
	created? (): void;
	attached? (): void;
	detached? (): void;
	attributeChanged? (attrName: string, oldVal: any, newVal: any): void;

}

class CPolymerElement implements IPolymerElement {

}

interface FireOptions {
      node?:any //Node to fire the event on (defaults to this).

      bubbles?:boolean //Whether the event should bubble. Defaults to true.

      cancelable?:boolean; //. Whether the event can be canceled with preventDefault. Defaults to false.
}

// Utility functions
// https://www.polymer-project.org/1.0/docs/devguide/utility-functions.html
declare class PolymerElement  {

      $: { [id: string]: any }; //polymer object for elements that have an ID

      // Returns the first node in this element’s local DOM that matches selector.
      $$(selector): HTMLElement;

      // Toggles the named boolean class on the host element, adding the class if bool is truthy and removing it if bool is falsey. If node is specified, sets the class on node instead of the host element.
      toggleClass(name:string, bool:Boolean, node?:any);

      // Like toggleClass, but toggles the named boolean attribute.
      toggleAttribute(name:string, bool:boolean, node?:any);

      // Moves a boolean attribute from oldNode to newNode, unsetting the attribute (if set) on oldNode and setting it on newNode.
      attributeFollows(name:string, newNode:any, oldNode:any);

      // Calls method asynchronously. If no wait time is specified, runs tasks with microtask timing (after the current method finishes, but before the next event from the event queue is processed). Returns a handle that can be used to cancel the task.
      async(method: () => void, wait?: number): any ;
       // Cancels the identified async task.
      cancelAsync(handle:any);

      // Fires a custom event. The options object can contain the following properties:
      fire(type: string, details?: any, options?:FireOptions): void ;

      // Dynamically imports an HTML document.
      importHref(href, onload:() => void, onerror:() => void);

}

// tag decorator
function tag(tagname: string)
{
   return function (target: Function)
   {
      target.prototype["is"] = tagname;
   }
}

// extends decorator
function extendsTag(tagname: string)
{
   return (target: Function) =>
   {
      target.prototype["extends"] = tagname;
   }
}

// hostAttributes decorator
function hostAttributes(attributes: Object)
{
   return (target: Function) =>
   {
      target.prototype["hostAttributes"] = attributes;
   }
}

// property definition interface
interface propDefinition
{
   type?: Function;
   value?: boolean|number|string|Function;
   reflectToAttribute?: boolean;
   readonly?: boolean;
   notify?: boolean;
   computed?: string;
   observer?: string;
}


// property decorator
function property(ob: propDefinition)
{
   return (target: IPolymerElement, propertyKey: string) => {
      target.properties = target.properties || {};
      target.properties[propertyKey] = ob;
   }
}

// https://www.polymer-project.org/1.0/docs/devguide/events.html
// listener decorator
function listener(eventName: string)
{
   return (target: IPolymerElement, propertyKey: string) => {
      target.listeners = target.listeners || {};
      target.listeners[eventName] = propertyKey;
   }
}

// element registration functions

function Register(element: Function): void
{
   Polymer(element.prototype);
}

function RegisterClass(element: Function): void
{
   Polymer.Class(element.prototype);
}
