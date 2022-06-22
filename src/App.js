import './App.css';
import Login from './pages/login/form__login';
import Home from './pages/home/home';
import Product from './pages/home/product/product';
import Documentation from './pages/home/documentation/documentation';
import PortfolioDoc from './pages/home/portfoliodoc/portfolio';
import DocView from './pages/home/documentation/docView';
import Transactions from'./pages/home/portfoliodoc/transactions';
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

         

        </Routes>
    </Router>
  );
}

export default App;


