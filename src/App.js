import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Blog from './pages/Blogs/Blog';


function App() {
  return (
    <div className="App">
      <Header />

      <Home />

      <About />

      <Services />

      <Blog />
    </div>
  );
}

export default App;
