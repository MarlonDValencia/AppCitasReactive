import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { getPaciente } from "../actions";

const Form = () => {
  const pacientes = useSelector((state) => state.paciente);
  const dispatch = useDispatch();

  

  const [state, setState] = useState({
    search: "",
    paciente: pacientes,
  });

  const onSearch = (e) => {
    e.preventDefault();
    if (pacientes.length === 0) {
      console.log("No se encontró dicha cita");
    } else {
      dispatch(getPaciente(state.search));
      console.log(state.paciente);
    }
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      paciente: pacientes,
    });
  };

  return (
    <>
      <h1>Buscar una cita</h1>
      <form onSubmit={onSearch}>
        <input
          name="search"
          onChange={onChange}
          value={state.search}
          type="search"
          placeholder="Ingrese la fecha y la hora de la cita"
        />
        <button onClick={onSearch} className="btn btn-search" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
};

export default Form;
