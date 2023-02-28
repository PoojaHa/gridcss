import logo from './logo.svg';
import './App.css';
import Navbar from './componets/navbar/Navbar';
import Hero from './componets/hero/Hero';
import Iframevideo from './componets/iframevideo/Iframevideo';
import SuceedPage from './componets/suceed/suceedPage';
import Promote from './componets/whyUpPromote/Promote';

function App() {
 
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <Iframevideo/>
       <SuceedPage/>
       <Promote/>
    </div>
  );
}

export default App;
