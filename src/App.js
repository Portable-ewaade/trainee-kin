import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Card from './component/Card';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
