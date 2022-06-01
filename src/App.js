import "./App.css";
import { AccidentCases } from "./components/AccidentCases";
import { fakeList } from "./components/accidentCasesData";

function App() {
  return (
    <div className="App font-montserrat">
      <AccidentCases tabList={fakeList} />
    </div>
  );
}

export default App;
