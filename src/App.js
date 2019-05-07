import React from 'react';

//import Provider
import { Provider } from './context';

//components
import Header from './components/layout/Header';
import Employees from './components/employees/Employees';
import Footer from './components/layout/Footer';

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/*Provide app level state */}
      <Provider>
        <Header />
        <Employees />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
