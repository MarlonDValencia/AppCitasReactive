import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { getCita } from "../actions";
import Swal from "sweetalert2";

const FormCita = () => {
  const citas = useSelector((state) => state.cita);
  const dispatch = useDispatch();
  var citaInfo = {};

  const [state, setState] = useState({
    date: "",
    hour: "",
    cita: citas,
    citaCard: {},
    count: 0,
  });

  useEffect(() => {
    dispatch(getCita(state.date, state.hour))
  }, [state]);

  const onSearch = (e) => {
    e.preventDefault();
    setState({
      ...state,
      count: state.count + 1,
    });
    if (!citas.nombrePaciente) {
      Swal.fire({
        icon: "error",
        title: "Cita No Encontrada",
        text: "Intente con otra fecha y hora (Separador -)",
      })
    } else {
      console.log(citas);
      setState({
        ...state,
        citaCard: {
          name: citas.nombrePaciente,
          lastname: citas.apellidosPaciente,
          doc: citas.nombreMedico,
          doc_lastname: citas.apellidosMedico,
          date: citas.fechaReservaCita,
          hour: citas.horaReservaCita,
          state: citas.estadoReservaCita,
        },
      });
      console.log(state.citaCard)
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
      <h1>Buscar una cita usando ID del cita</h1>
      <form onSubmit={onSearch}>
        <input
          name="date"
          onChange={onChange}
          value={state.date}
          type="search"
          placeholder="Ingrese fecha de la cita"
        />
        <input
          name="hour"
          onChange={onChange}
          value={state.hour}
          type="search"
          placeholder="Ingrese hora de la cita"
        />
        <button onClick={onSearch} className="btn btn-primary" type="submit">
          Buscar
        </button>
      </form>
      {Object.keys(state.citaCard).length === 0 ? (
        <p>Presiona el botón buscar!</p>
      ) : (
        <h3>
          <p>Nombre Del Paciente: {state.citaCard.name}</p>
          <p>Apellido Del Paciente: {state.citaCard.lastname}</p>
          <p>Nombre Del Médico: {state.citaCard.doc}</p>
          <p>Apellido Del Médico: {state.citaCard.doc_lastname}</p>
          <p>Fecha De La Reserva: {state.citaCard.date}</p>
          <p>Hora Reserva Cita: {state.citaCard.hour}</p>
          <p>Estado De La Cita: {state.citaCard.state}</p>
        </h3>
      )}
    </>
  );
};

export default FormCita;
