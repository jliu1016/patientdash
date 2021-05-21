import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {PatientTableComponent as PatientTable} from './components/PatientTable';
import {PatientTableContainer as PatientTable} from './containers/PatientTable';
import {PatientData} from './pages/PatientData'
function App() {
  return (
    <div className="App">
      <PatientData/>
    </div>
  );
}

export default App;
