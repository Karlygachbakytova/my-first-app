import List from './components/List';
import OL from './components/OL';

function App() {
let richPeople = ["Elon Musk", "Jeff Besos", "Bill Gates"];
return (
  <div className="App" >
    <List items = {richPeople}/>
     </div>
) 

}

export default App;
