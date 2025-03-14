import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  // var k = "#"
  // if(k in natoAlphabet){
  //   console.log(natoAlphabet[k])
  // }

  var [character, setCharacter] = useState("");
  var [phonetic, setPhonetic] = useState('');

  function handlePhoneticParagraph(e) {
    character = e.target.value;
    setCharacter(character);
    const natoAlphabet = {
      A: "Alpha",
      B: "Bravo",
      C: "Charlie",
      D: "Delta",
      E: "Echo",
      F: "Foxtrot",
      G: "Golf",
      H: "Hotel",
      I: "India",
      J: "Juliett",
      K: "Kilo",
      L: "Lima",
      M: "Mike",
      N: "November",
      O: "Oscar",
      P: "Papa",
      Q: "Quebec",
      R: "Romeo",
      S: "Sierra",
      T: "Tango",
      U: "Uniform",
      V: "Victor",
      W: "Whiskey",
      X: "X-ray",
      Y: "Yankee",
      Z: "Zulu",
      0: "Zero",
      1: "One",
      2: "Two",
      3: "Three",
      4: "Four",
      5: "Five",
      6: "Six",
      7: "Seven",
      8: "Eight",
      9: "Nine",
      ".": "Dot",
      ",": "Comma",
      "-": "Dash",
      _: "Underscore",
      "@": "At",
      "#": "Hash",
      $: "Dollar",
      "%": "Percent",
      "&": "Ampersand",
      "*": "Asterisk",
      "(": "Left Parenthesis",
      ")": "Right Parenthesis",
      "+": "Plus",
      "=": "Equals",
      "/": "Slash",
      "\\": "Backslash",
      "?": "Question Mark",
      "!": "Exclamation Mark",
      "'": "Apostrophe",
      '"': "Quotation Mark",
      ":": "Colon",
      ";": "Semicolon",
    };
    var newCharacter = character.toUpperCase();
    let splited = newCharacter.split("");
    splited.join(' ')
    const newArr = []
    const empty = [' ']
    splited.forEach((spt)=>{
      newArr.push(natoAlphabet[spt])
      newArr.push(" ")
      setPhonetic(newArr)
    })
    
  }
  
  return (
    <>
      <div className="phonetic-container">
        <div className="header">
          <h1 className="Phonetic-header">Type to Change To phonetic</h1>
        </div>
        <div className="input">
          {" "}
          <input
            type="text"
            className="inputVal"
            placeholder="Change To Phonetic"
            onChange={handlePhoneticParagraph}
            value={character}
          />
        </div>
        <div className="output">
          <p className="output-paragraph">{phonetic} </p>
        </div>
      </div>
    </>
  );
}

export default App;
