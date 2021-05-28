import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import Produtos from "./pages/Produtos/Produtos";
import page404 from "./pages/NotFound/page404";
import Pedido from "./pages/Pedido/Pedido";
import { GlobalStorage } from "../src/CartContext";

function App() {
  return (
    <GlobalStorage>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/pedido" component={Pedido} />
            <Route exact path="/*" component={page404} />
          </Switch>
        </BrowserRouter>
      </div>
    </GlobalStorage>
  );
}

export default App;
