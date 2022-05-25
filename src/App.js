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
     </div>
    </div>
  )
}

export default App;
