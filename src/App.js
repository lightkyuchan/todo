import './App.css';
import AddItem from './components/AddItem';
import Header from './components/Header';
import Item from './components/Item';


function App() {
  return (
    <div className="App">
      <Header />
      <AddItem />
      <Item />
    </div>
  );
}

export default App;
