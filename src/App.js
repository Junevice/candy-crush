import { useState, useEffect} from "react";

const width=8;
const candyColors=['blue', 'green', 'organge', 'yellow', 'purple', 'red'];


const App = () => {

  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement=[];
    for(let i=0; i<width*width; i++){
      const randomColor=candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  }


  useEffect(()=>{
    createBoard()
  }, []);
  
  console.log(currentColorArrangement)

  return (
    <div className="App">
      <h1>Hey</h1>
    </div>
  );
}

export default App;
