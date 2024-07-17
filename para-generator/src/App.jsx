// useState: A React hook for managing state in functional components.
import { useState } from "react";
import "./App.css";

// An array of words that will be used to generate the random paragraph.
const wordList = [
  "my",
  "name",
  "is",
  "muhammad",
  "shariq",
  "react",
  "vite",
  "devops",
  "btech",
  "web3.0",
  "samul",
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "ut",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "ut",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
  "duis",
  "aute",
  "irure",
  "dolor",
  "in",
  "reprehenderit",
  "in",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "dolore",
  "eu",
  "fugiat",
  "nulla",
  "pariatur",
  "excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
  "sunt",
  "in",
  "culpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum",
];

function App() {
  // length: State variable to store the number of words in the paragraph.
  // setLength: Function to update the length state.
  // paragraph: State variable to store the generated paragraph.
  // setParagraph: Function to update the paragraph state.
  const [length, setLength] = useState(0);
  const [paragraph, setParagraph] = useState("");

  // This function generates a paragraph of the specified length.
  const generateParagraph = (e) => {
    // paragraphArray: An array to hold the words of the paragraph.
    let paragraphArray = [];
    for (let i = 0; i < e; i++) {
      const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
      paragraphArray.push(randomWord);
    }
    setParagraph(paragraphArray.join(" "));
  };

  const handleChnage = (e) => {
    setLength(e.target.value);
  };

  const handleGenerate = () => {
    generateParagraph(length);
  };

  return (
    <>
      <div className="app">
        <div className="input-container">
          <label htmlFor="lenghtInput"><h1>Para Generator</h1></label><br />
          <input
            type="text"
            id="lengthInput"
            placeholder="Enter the Number of Words"
            onChange={handleChnage}
          />
          <button className="btn" onClick={handleGenerate}>Generate</button>
        </div>
        <div className="paragraph-conatiner">
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
}

export default App;
