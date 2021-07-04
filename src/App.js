import logo from './logo.svg';
import './App.css';
import Personal from "./components/Personal"
import Educational from './components/Educational'
import Work from './components/Work'
import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <Personal />
      <Educational />
      <Work />
    </div>
  );
}

export default App;
