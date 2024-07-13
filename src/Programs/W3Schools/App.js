
function Garage()
{
   const carInfo = {brand:"Honda", make:"2008",model:"Accord"};
   return (
      <>
        <Car carInfo={carInfo}></Car>
      </>
    )
}

function Car(props){
   return <h1>I am {props.carInfo.brand} Car</h1>
}

function Football() {
   const shoot = (a, b) => {
     alert(b.type);
     /*
     'b' represents the React event that triggered the function,
     in this case the 'click' event
     */
   }
 
   return (
     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
   );
 }
 
 function App(){
  return <>
        <Football/>
  </>
 }


export default App;