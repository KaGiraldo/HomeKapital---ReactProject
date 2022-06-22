import './App.css';
import Login from './pages/login/form__login';
import Home from './pages/home/home';
import Product from './pages/home/product/product';
import Documentation from './pages/home/documentation/documentation';
import PortfolioDoc from './pages/home/portfoliodoc/portfolio';
import DocView from './pages/home/documentation/docView';
import Transactions from'./pages/home/portfoliodoc/transactions';
import Recovery from'./pages/recovery/recovery';
import RecoveryDone from'./pages/recovery/recoveryDone';
import Reset from'./pages/recovery/resetPass';
import Verify from'./pages/recovery/verify';
import SetPass from './pages/recovery/setPass';


import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Login />}/>
         <Route path="/home" element={<Home />}/>
         <Route path="/home/product" element={<Product />}/>
         <Route path="/home/documentation" element={<Documentation />}/>
         <Route path="/documentation/docview" element={<DocView />}/>
         <Route path="/home/portfoliodoc" element={<PortfolioDoc />}/>
         <Route path="/home/transactions" element={<Transactions />}/>
         <Route path="/recovery" element={<Recovery />}/>
         <Route path="/recoveryDone" element={<RecoveryDone />}/>
         <Route path="/reset" element={<Reset />}/>
         <Route path="/verify" element={<Verify />}/>
         <Route path="/setpass" element={<SetPass />}/>
      </Routes>
    </Router>
  );
}

export default App;


