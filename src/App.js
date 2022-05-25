import Resume from "./components/resume";
import Form from "./components/form";

import "./css/app.css";

function App() {
  const resumeData = {};
  return(
    <div className="App">
      <Form />
      <div className="appResume">
        <Resume {...resumeData} />
        <div className="downloads">
            <button className="button b-blue">
              <span className="fa fa-download b-none"></span>
              Download CV
            </button>
        </div>
     </div>
    </div>
  )
}

export default App;
