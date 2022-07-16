import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Synonym from "./components/Synonym.js";
import { Container } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function App() {
  const [word, setWord] = useState("");
  const [synonym, setSynonym] = useState([]);
  const [darkTheme, setDarkTheme] = useState(true);


  useEffect(() => {
    const dictionaryApi = async () => {
      try {
        const res = await axios.get(`https://api.datamuse.com/words?ml=${word}`);
        // console.log(data.data[0].word);
        setSynonym(res.data);
      } catch (err) {
        console.log(err.status);
      }
    };
    dictionaryApi();
  }, [word]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: darkTheme ? "black" : "pink",
        color: darkTheme ? "white" : "black",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", height: "100vh", flexDirection: "column" }}
      >
        <div style={{ position: "absolute", top: 0, right: 15, margin: 10 }}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            onChange={() => setDarkTheme(!darkTheme)}
            label={darkTheme ? "Dark Mode" : "Pink Mode"}
          />
        </div>
        <Header word={word} setWord={setWord} darkMode={darkTheme} />
        <Synonym myWord={word} wordSynonym={synonym} />
        <Footer darkTheme={darkTheme}/>
      </Container>
    </div>
  );
}

export default App;

//Fetching function using fetch function
// const response=await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/sentiment')
// const data=response.json()
// data.then((res)=>console.log(res));
