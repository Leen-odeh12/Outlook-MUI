import './App.css';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import BodyLeft from './component/BodyLeft/BodyLeft';
import BodyRight from './component/BodyRight/BodyRight';

function App() {
  return (
    <div className="App">
    
    <Header/>
    <Main/>
    <BodyLeft/>
    <BodyRight/>
    </div>
  );
}

export default App;
