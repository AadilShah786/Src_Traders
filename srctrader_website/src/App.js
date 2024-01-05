import './App.css';
import HOME from './components/home.js';
import ABOUT from './components/about/about';
import REASON from './components/reason/reason';
import PROCESS from './components/process/process';
import PRICING from './components/pricing/pricing';
import PROGRESS from './components/progress';
import TESTIMONIALS from './components/testimonial/testimonial';
import CONTACT from './components/contact/contact';
import NAV from './components/nav/nav';

function App() {
  
    return (
      <div className="App" >
       
        <HOME/>
        {/* <ABOUT/> */}
        <REASON/>
        <PROCESS/>
        <PRICING/>
        {/* <PROGRESS/> */}
        <TESTIMONIALS/>
        <CONTACT/>
        <NAV/>
      </div>
    );
  
}

export default App;

