import './App.css';
import {Appbar} from "./components/Header/Header";
import {RoutesComponent} from "./routes/routes";

function App() {
  return (
    <div className="App">
        <Appbar/>
        <RoutesComponent/>
    </div>
  );
}

export default App;
