import "./App.css";
import logoContador from "../src/imagenes/contador.png";
import Button from "../src/components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const doClic = () => {
    setNumClics(numClics + 1);
  };

  const restartContador = () => {
    setNumClics(0);
  };

  return (
    <>
      <div className="App">
        <div className="contenedor-del-logo">
          <img className="contador-logo" src={logoContador} alt="logo" />
        </div>
        <div className="contenedor-principal">
          <Counter numClic={numClics} />
          <Button texto="Clic" buttonClic={true} doClic={doClic} />
          <Button
            texto="Reiniciar"
            buttonClic={false}
            doClic={restartContador}
          />
        </div>
      </div>
    </>
  );
}

export default App;
