import { useState } from "react";

export const BuscadorPeliculas = () => {
  const [busqueda, setbusqueda] = useState("");

  const handleInputChange = (e) => {
    setbusqueda(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Buscador de Películas</h1>
      <form onSubmit={}>
        <input
          type="text"
          placeholder="Escribir un película"
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
    </div>
  );
};