import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { getCita } from "../actions";

const Form = () => {
  const citas = useSelector((state) => state.cita);
  const dispatch = useDispatch();

  

  const [state, setState] = useState({
    search: "",
    cita: citas,
  });

  const onSearch = (e) => {
    e.preventDefault();
    if (pacientes.length === 0) {
      console.log("No se encontró dicha cita");
    } else {
      dispatch(getCita(state.search));
      console.log(state.cita);
    }
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      cita: citas,
    });
  };

  return (
    <>
      <h1>BuscarUnPaciente</h1>
      <form onSubmit={onSearch}>
        <input
          name="search"
          onChange={onChange}
          value={state.search}
          type="search"
          placeholder="Ingrese el ID Del paciente"
        />
        <button onClick={onSearch} className="btn btn-search" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
};

export default Form;



const FormCita = () => {
  return(
    <>
    </>
  )
}

export default FormCita