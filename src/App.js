import AccidentCases from "./components/AccidentCases";
import { fakeList, pagetitle } from "./__mockup/accidentCasesData";

function App() {
  return (
    <div className="App font-montserrat">
      <AccidentCases tabList={fakeList} pagetitle={pagetitle} />
    </div>
  );
}

export default App;
