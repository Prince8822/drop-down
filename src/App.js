
import './App.css';

function App() {

  // ARRAY LIST CREATED
  const myAr = ['APPLE', 'BANANA', 'ORANGE','MANGO','GRAPES'];

  return (
    <div className="App">
    <h1>SELECT YOUR FAVURITE FRUIT</h1>
  <ul class="drop">
  
    <a class="btn">SELECT   </a>
    <div class="drop-Menu">

    {/* MAP OVER THE ARRAY ITEMS */}
    {myAr.map((item) => <a href="">{ item}</a>)}

     
      

    </div>
  </ul>

    </div>
  );
}


export default App;


