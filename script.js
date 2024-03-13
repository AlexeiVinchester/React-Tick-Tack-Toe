const SYMBOL_X = 'X';
const SYMBOL_O = 'O';

function App() {

    /*
        React.useState() get param, which is a default value for state;
        React.useState() returns array of two values: state and setState;
        state - new value of state;
        setState - function, which helps to change state;
    */
    const [cells, setCells] = React.useState([null, null, null, null, null, null, null, null, null]);
    const [currentStep, setCurrenstStep] = React.useState(SYMBOL_O);

    /*
      this function recognises class of Symbol and returnes
      string of needed class, which then we will install in span element
    */

    const getSymbolClassName = (symbol) => {
      if(symbol === SYMBOL_O) return 'symbol--o';
      if(symbol === SYMBOL_X) return 'symbol--x';
    }

    /*
      this function return JSX of span element with needed className of
      symbol: O or X, which we put into used section on the field
      of  
    */

    const renderSymbol = (symbol) => <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>

    const handleCellClick = (index) => {
        /*We can click only empty sections*/
        if(cells[index]){
            return;
        }

        const cellsCopy = cells.slice();
        cellsCopy[index] = currentStep;
        setCells(cellsCopy);
        currentStep === SYMBOL_O ? setCurrenstStep(SYMBOL_X) : setCurrenstStep(SYMBOL_O)

    };

    return (
      <div className="game>">
        <div className="game-info">
          Ход: {renderSymbol(currentStep)}
        </div>
        <div className="game-field">
          {cells.map((symbol, index) => {
            return (
              <button key={index} className="cell" onClick={() => handleCellClick(index)}> 
                {
                  symbol ? renderSymbol(symbol) : null
                }
              </button>
          )
          })}
        </div>
      </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);