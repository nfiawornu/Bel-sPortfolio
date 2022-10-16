 
import './App.css';
import {Hero,Services,Portfolio,Skills,Certificates,Footer} from './components'

function App() {
  return (
    <main className='px-10'>
      <Hero/>
      <Services/>
      <Portfolio/>       
      <Skills/>
      <Certificates/>
      <Footer/>  
    </main>
  );
}

export default App;
