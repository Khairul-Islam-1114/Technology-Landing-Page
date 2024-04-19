import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';


function App() {
  return (
    <div className="App">
      <Header />

      <Home />

      <About />
    </div>
  );
}

export default App;
