
@tag("my-element")
class MyElement implements IPolymerElement
{
   @property({type: String, value: "1024"})
   test: string;

   @listener("tap")
   regularTap(e)
   {
      alert("Thank you for tapping");
   }


   ready()
   {

      console.log(  this["is"], " ready!");


   }

}

Register( MyElement );
