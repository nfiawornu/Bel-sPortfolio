 
import './App.css';
import {Hero,Services,Portfolio,Skills,Footer} from './components'

function App() {
  return (
    <main className='px-10'>
      <Hero/>
      <Services/>
      <Portfolio/> 
      
      <Skills/>
      <Footer/>  
    </main>
  );
}

export default App;
