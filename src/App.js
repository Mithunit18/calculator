import { useState } from "react";
import { FaBackspace } from "react-icons/fa"; // Import the backspace icon

function App() {
  const [result, setResult] = useState('');

  const hanldeButtonClick = (value) => {
    setResult((prev) => prev + value);
  };
  const handleClear = () => {
    setResult('');
  };
  const hanldeResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("undefined Error");
    }
  };
  const handleBackspace = () => {
    setResult((prev) => prev.slice(0, -1));
  };

  return (
    <main>
      <form className="my_form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="text"
          value={result}
        />
        <div className="values">
          <input type="button" value="1" onClick={() => hanldeButtonClick("1")} />
          <input type="button" value="2" onClick={() => hanldeButtonClick("2")} />
          <input type="button" value="3" onClick={() => hanldeButtonClick("3")} />
          <input type="button" value="4" onClick={() => hanldeButtonClick("4")} />
          <input type="button" value="5" onClick={() => hanldeButtonClick("5")} />
          <input type="button" value="6" onClick={() => hanldeButtonClick("6")} />
          <input type="button" value="7" onClick={() => hanldeButtonClick("7")} />
          <input type="button" value="8" onClick={() => hanldeButtonClick("8")} />
          <input type="button" value="9" onClick={() => hanldeButtonClick("9")} />
          <input type="button" value="0" onClick={() => hanldeButtonClick("0")} />
          <input type="button" value="+" onClick={() => hanldeButtonClick("+")} />
          <input type="button" value="-" onClick={() => hanldeButtonClick("-")} />
          <input type="button" value="*" onClick={() => hanldeButtonClick("*")} />
          <input type="button" value="/" onClick={() => hanldeButtonClick("/")} />
          <button onClick={handleBackspace}>
            <FaBackspace />
          </button>
          <input type="button" value="C" onClick={handleClear} />
          <input type="button" value="=" onClick={hanldeResult} />
        </div>
      </form>
    </main>
  );
}

export default App;
