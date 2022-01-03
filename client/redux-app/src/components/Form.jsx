import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { getPaciente } from "../actions";
import Swal from 'sweetalert2'

const Form = () => {
  const pacientes = useSelector((state) => state.paciente);
  const dispatch = useDispatch();
  var pacienteInfo = {}

  const [state, setState] = useState({
    search: "",
    paciente: pacientes,
    pacienteCard: {}
  });

  useEffect(() => {
    dispatch(getPaciente(state.search))
  }, [state]);

  const onSearch = (e) => {
    e.preventDefault();
    if (pacientes.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Cita No Encontrada',
        text: 'Intente con otro ID',
      })
    } else {
      if(pacientes.length > 0){
        console.log(pacientes)
      pacienteInfo = {
          name : pacientes[0].nombrePaciente,
          lastname: pacientes[0].apellidosPaciente,
          doc: pacientes[0].nombreMedico,
          doc_lastname: pacientes[0].apellidosMedico,
          date: pacientes[0].fechaReservaCita,
          hour: pacientes[0].horaReservaCita,
          state: pacientes[0].estadoReservaCita
        }
      }
      setState({
        ...state,
        pacienteCard: pacienteInfo,
      })
    }
  };

  const onChange = (e) => {
    dispatch(getPaciente(state.search));
    setState({
      ...state,
      [e.target.name]: e.target.value,
      paciente: pacientes,
    });
  };

  return (
    <>
      <h1>Buscar una cita usando ID del paciente</h1>
      <form onSubmit={onSearch}>
        <input
          name="search"
          onChange={onChange}
          value={state.search}
          type="search"
          placeholder="Ingrese el ID del paciente"
        />
        <button  onClick={onSearch} className="btn btn-primary" type="submit">
          Buscar
        </button>
      </form>
      {(Object.keys(state.pacienteCard).length === 0) ? 
      (<p>Presiona el botón buscar!</p>):(
            <h3>
              <p>Nombre Del Paciente: {state.pacienteCard.name}</p>
              <p>Apellido Del Paciente: {state.pacienteCard.lastname}</p>
              <p>Nombre Del Médico: {state.pacienteCard.doc}</p>
              <p>Apellido Del Médico: {state.pacienteCard.doc_lastname}</p>
              <p>Fecha De La Reserva: {state.pacienteCard.date}</p>
              <p>Hora Reserva Cita: {state.pacienteCard.hour}</p>
              <p>Estado De La Cita: {state.pacienteCard.state}</p>
            </h3>
      )}
    </>
  );
};

export default Form;
