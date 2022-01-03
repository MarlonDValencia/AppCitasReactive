import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, connect } from 'react-redux';
import store from './store/index'
import firebaseConfig from './firebase-config';
import {
  FirebaseAppProvider
} from 'reactfire'
import Form from './components/Form';

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <Suspense fallback={"Conectando a la app..."}>
        <App />
      </Suspense>
    </React.StrictMode>
  </FirebaseAppProvider>
),
  document.getElementById('root')
);