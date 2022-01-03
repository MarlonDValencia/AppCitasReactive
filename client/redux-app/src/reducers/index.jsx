import { GET_PACIENTE, GET_CITA } from "../actions/index";

const INITIAL_STATE = {
  paciente: {},
  cita: {},
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PACIENTE:
      return {
        ...state,
        paciente: action.payload.paciente,
      };

    case GET_CITA:
      console.log("Llegó")
      return {
        ...state,
        cita: action.payload.cita,
      };

      default:
            return state;
  }
}

export default rootReducer;
