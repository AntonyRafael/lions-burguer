import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import Produtos from "./pages/Produtos/Produtos";
import Page404 from "./pages/NotFound/Page404";
import Pedido from "./pages/Pedido/Pedido";
import { GlobalStorage } from "../src/CartContext";
import { UserStorage } from "./UserContext";
import Perfil from "./pages/Perfil/Perfil";

function App() {
  return (
    <UserStorage>
      <GlobalStorage>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cadastro" component={Cadastro} />
              <Route exact path="/produtos" component={Produtos} />
              <Route exact path="/pedido" component={Pedido} />
              <Route exact path="/perfil" component={Perfil} />
              <Route exact path="/*" component={Page404} />
            </Switch>
          </BrowserRouter>
        </div>
      </GlobalStorage>
    </UserStorage>
  );
}

export default App;
