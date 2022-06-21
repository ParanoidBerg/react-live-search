import { useState } from "react";
import Main from "./components/main/Main";
import styles from "./styles.module.css";
import Array from "./components/Array/Array";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const filtredArr = Array.filter((element) =>
    element.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <>
      <div className={styles.inputCnt}>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={handleChange}
        ></input>
      </div>
      <div className={styles.app}>
        {filtredArr.map((element, index) => {
          return (
            <div className={styles.cardCnt}>
              <Main
                name={element.name}
                price={element.price}
                img={element.image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
