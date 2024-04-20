import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';


function App() {
  return (
    <div className="App">
      <Header />

      <Home />

      <About />

      <Services />
    </div>
  );
}

export default App;
