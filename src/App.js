import './App.css';
import News from './components/News'
import News_des from './components/News_des';
import StartupNews from './components/StartupNews';
import StartupDescription from './components/StartupDescription';
import Innovation from './components/InnovationComponent';
import InnovationDetails from './components/InnovationDetailsComponent';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<StartupNews/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/news_des" element={<News_des />} />
        <Route path="/startup_news" element={<StartupNews/>} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/inno_details" element={<InnovationDetails />} />
        <Route path="/startup_description" element={<StartupDescription/>} />
        <Route path='*' element={<h2> OOPS page not found... </h2>} />    
    </Routes>    
  </BrowserRouter>
  );
}

export default App;
