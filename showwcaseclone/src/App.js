import Header from "./Header";
// import Sidebar from "./Sidebar";
import Demo from "./Demo";
// import Dropdown from "./Dropdown";
import {useState} from 'react';

function App() {
  // const [create, setCreate] = useState(true);

  // function handleClicked(){
  //   setCreate(prevCreate => !prevCreate);
  // }

  return (
    <div className="App">
      < Header />
      {/* < Sidebar /> */}
      < Demo />
      {/* < Dropdown /> */}
    </div>
  );
}

export default App;
