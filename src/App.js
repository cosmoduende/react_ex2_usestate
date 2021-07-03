import {useState} from "react"

function App() {

  const [name, setName] = useState("Saúl");
  // especificar que puede o no tener parámetro de función, como abajo con age
  const [age] = useState("33");
  
  const handleHeyClick =() => {
    setName("@cosmoduende");
  };

  return (
    <div className="App">
      <h2>Hola {name}</h2>
      <p>Edad: {age}</p>
      <button onClick={handleHeyClick} > hey! </button>
    </div>
  );
}

export default App;
