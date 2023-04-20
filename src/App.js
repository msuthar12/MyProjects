import './App.css';

import About from './Components/About';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch';


function App() {

  

  return (
    <>
    <Router>
      <Navbar  />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Text />} />
          <Route exact path="*" element={<NoMatch />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
