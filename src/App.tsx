import { useState } from "react";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

interface Img {
  "message": string
  "status": string
}

function App() {
  const [joke, setJoke] = useState<Joke>();

  // const handleGetJoke = async () => {
  //   const response = await fetch(
  //     "https://jokestemp.neillbogie.repl.co/jokes/general/random"
  //   );
  //   const jsonBody: Joke[] = await response.json();
  //   setJoke(jsonBody[0]);
  // };

  const handleGetJoke = () => {
    fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
      .then((response) => response.json())
      .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  };

  const [img, setImg] = useState<Img>()

  const handleDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((jsonBody: Img) => setImg(jsonBody))
  }

  
    return (
      <div>
        <h1>Dog Image app</h1>
        <button onClick={handleDogImage} style={{display:"block"}}>get image</button>
        <br></br>
        <img src={img?.message} width="30%"></img>        
      </div>      
    );

}

export default App;

//change usestate to array of Img objects
//fetch api -> push to array
//return map of list of <img> tags with src={each Img object property message}

    //map has parameter Img object then acces mesage add to src?
    // img.map(func)
    // func ({msg:string, status:string}):jsxelem {return img with src {msg}}
