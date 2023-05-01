import data from './Data/data.json';
import Rating from './Rating';

function App() {
  console.log(data)
  return (
    <div className="App">
      {data.map(Logement => (
      <div key={Logement.id}>
        <div>{Logement.title}</div>
        <Rating rate={Logement.rating}/>
      </div>
      ))}
    </div>
  );
}

export default App;
