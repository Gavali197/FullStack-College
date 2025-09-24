import logo from './logo.svg';
import './App.css';
import Name from './Components/Name';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card';


function App() {
  return (
    <div className="App">
    <div className="header">
      <Header />  
    </div>      

      <Name />  
     <Card />
      <br/>
     <Footer />
    </div>
  );
}

export default App;
