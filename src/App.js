import { Navbar } from "./components/Navbar";
import { Switch,Route } from 'react-router-dom';
import { Add } from "./components/Add"
import { Edit } from "./components/Edit";
import { View } from "./components/View";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Switch>
          <Route  exact path="/" component={View}>
            <View />
          </Route>
          <Route path="/add" component={Add}>
            <Add />
          </Route>
          <Route path="/edit/:id" component={Edit}>
            <Edit />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
