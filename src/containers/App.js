import React from 'react';
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Logo from '../components/Layouts/Header/Logo/Logo';
import Alert from '../components/Layouts/Header/Alert/Alert';
import Account from '../components/Layouts/Header/Account/Account';
import Sidebar from '../components/Layouts/Sidebar/Sidebar';
import Main from '../components/Layouts/Main/Main';
import Version from '../components/Layouts/Footer/Version/Version';
import Footer from '../components/Layouts/Footer/Footer/Footer';
import Stat from '../components/Pages/Dashboard/Stat/Stat';
import Invoice from '../components/Pages/Sales/Invoice/Invoice';
import Services from '../components/Pages/Services/Services';
import Engineering from '../components/Pages/Engineering/Engineering';
import Qc from '../components/Pages/Qc/Qc';
import Supply from '../components/Pages/Supply/Supply';
import Warehouse from '../components/Pages/Warehouse/Warehouse';
import Accounting from '../components/Pages/Accounting/Accounting';
import Hr from '../components/Pages/Hr/Hr';
import Manager from '../components/Pages/Manager/Manager';
import Setting from '../components/Pages/Setting/Setting';
import Produce from '../components/Pages/Produce/Produce';
import AddInvoice from '../components/Pages/Sales/Invoice/AddInvoice/AddInvoice';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ 
      <div className="rtl-grid grid grid-cols-12 gap-2 m-2 h-screen" >
      <div className="col-span-2 row-span-1 sm:col-span-2 sm:row-span-1"><Logo/></div>
      <div className="col-span-8 row-span-1 sm:col-span-8 sm:row-span-1"><Alert/></div>
      <div className="col-span-2 row-span-1 sm:col-span-2 sm:row-span-1"><Account/></div>
      
      <section className="col-span-12 row-span-1 sm:col-span-2  sm:row-span-3"><Sidebar/></section> 
      <section className="col-span-12 row-span-3 sm:col-span-10 sm:row-span-4"><Main/></section>

      <div className="col-span-12 row-span-1 sm:col-span-2 sm:row-span-2"><Version/></div>
      <section className="col-span-12 row-span-1 sm:col-span-10"><Footer/></section>
      
    </div>}>
    <Route path="bi" element={ <Stat/>}/>
    <Route path="sales" element={ <Invoice/>}/>
    <Route path="add" element={ <AddInvoice/>}/>
    <Route path="services" element={ <Services/>}/>
    <Route path="produce" element={ <Produce/>}/>
    <Route path="engineering" element={ <Engineering/>}/>
    <Route path="qc" element={ <Qc/>}/>
    <Route path="supply" element={ <Supply/>}/>
    <Route path="warehouse" element={ <Warehouse/>}/>
    <Route path="Accounting" element={ <Accounting/>}/>
    <Route path="hr" element={ <Hr/>}/>
    <Route path="manager" element={ <Manager/>}/>
    <Route path="setting" element={ <Setting/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
