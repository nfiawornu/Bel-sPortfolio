 
import './App.css';
import {Hero,Services,Portfolio,Resume,Skills,Footer} from './components'

function App() {
  return (
    <div className="App">
      <Hero/>
      <Services/>
      <Portfolio/> 
      <Resume/>
      <Skills/>
      <Footer/>  
    </div>
  );
}

export default App;
