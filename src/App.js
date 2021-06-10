import { useState } from "react";
import Special from "./components/Special";
import Numbers from "./components/Numbers";
import Upper from "./components/Upper";
import Lower from "./components/Lower";
import { useRef } from "react";

const App = () => {
  let [up, setUp] = useState(true);
  let [low, setLow] = useState(true);
  let [special, setSpecial] = useState(true);
  let [num, setNum] = useState(true);
  const lengthL = useRef();
  const inBox = useRef();
  let passLen = 30;

  const changeIt = () => {
    document.getElementById("demo").innerHTML = lengthL.current.value;
    passLen = lengthL.current.value;
  };

  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower = "abcdefghijkmnopqrstuvwyz",
    nums = "0123456789",
    spec = "!@#$%^&*";

  const createPass = () => {
    let x = "";
    if (up) {
      x += upper;
    }
    if (low) {
      x += lower;
    }
    if (special) {
      x += spec;
    }
    if (num) {
      x += nums;
    }
    let pass = "";
    for (let i = 0; i < passLen; i++) {
      pass += x.charAt(Math.floor(Math.random() * x.length));
    }
    inBox.current.value = pass;
  };

  return (
    <div className="container">
      <div className="textarea">
        <textarea readOnly={true} ref={inBox} rows="7" cols="55">
          Password Here
        </textarea>
      </div>
      <div id="slidebox">
        <input
          type="range"
          min="1"
          max="30"
          ref={lengthL}
          id="myRange"
          onChange={changeIt}
        />
        <p>
          Length:<span id="demo">30</span> chars
        </p>
      </div>
      <div className="buttonholder">
        <div>
          <Upper
            color={up ? "lightgreen" : "tomato"}
            onClick={() => setUp(!up)}
          />
        </div>
        <div>
          <Lower
            color={low ? "lightgreen" : "tomato"}
            onClick={() => setLow(!low)}
          />
        </div>
        <div>
          <Special
            color={special ? "lightgreen" : "tomato"}
            onClick={() => setSpecial(!special)}
          />
        </div>
        <div>
          <Numbers
            color={num ? "lightgreen" : "tomato"}
            onClick={() => setNum(!num)}
          />
        </div>
      </div>
      <div className="submitbutton">
        <button id="subb" onClick={createPass}>
          Create Password
        </button>
      </div>
    </div>
  );
};

export default App;
