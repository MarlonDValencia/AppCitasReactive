import { Provider } from "react-redux";
import Form from "./components/Form.jsx"
import store from "./store/index"
import FormCita from "./components/FormCita.jsx"
import {useFirebaseApp} from 'reactfire'

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase)
  return (
    <Provider store={store}>
    <Form/>
    <FormCita/>
    </Provider>
    )
}

export default App;
