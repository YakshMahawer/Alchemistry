import React, {useState, useEffect} from 'react'
import Inorganic from './inorganic';
import Sidebar from './sidebar';
import Organic from './organic';
import Lab from './lab';
import Titration from './titration';
import './app.css'

function App() {
  const [lab, setLab] = useState(true);
  return (
    <div className="App">
    <div className="mainpage">
      <Sidebar />
        <Lab />
    </div>
    </div>
  );
}

export default App;
