import './App.css';
import {Appbar} from "./components/Header/Header";
import {Services}  from './components/Services/Services';
import {RoutesComponent} from "./routes/routes";

function App() {
  return (
    <div className="App">

        {/* <Appbar/>
        <RoutesComponent/> */}

        <Services/>

    </div>
  );
}

export default App;
