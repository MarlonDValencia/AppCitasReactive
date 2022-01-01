import { Provider } from "react-redux";
import Form from "./components/Form.jsx"
import store from "./store/index"
import FormCita from "./components/FormCita.jsx"

function App() {
  return (
    <Provider store={store}>
    <Form/>
    <FormCita/>
    </Provider>
    )
}

export default App;
