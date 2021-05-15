import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import './App.css'
import Cadastro from "./pages/Cadastro/Cadastro";
import page404 from "./pages/NotFound/page404";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/cadastro' component={Cadastro} />
          <Route exact path='/*' component={page404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
