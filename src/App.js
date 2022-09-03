import React from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {

  const [productosEnCarrito, setProductosEnCarrito] = React.useState(0)

  const sumarProductos = () => {
    setProductosEnCarrito(productosEnCarrito + 1)
    return productosEnCarrito
  }

  return (
    <div className="App">
      <Cabecera productosEnCarrito={productosEnCarrito}/>
      <Listado sumarProductos={sumarProductos}/>
    </div>
  );
}

export default App;