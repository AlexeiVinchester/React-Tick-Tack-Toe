const SYMBOL_X = 'X';
const SYMBOL_O = 'O';

const computeWinner = (cell) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    /*
        Here we check values at lines of indexes in our game field,
        if they are the same, return array of this indexes in 
        one line
    */

    for(let i = 0; i < lines.length; i++){
        const [a, b ,c] = lines[i];
        if(
            cell[a] && 
            cell[a] === cell[b] &&
            cell[a] === cell[c]
        ) {
            return [a, b, c];
        }
    }
}

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
        setCurrenstStep(currentStep === SYMBOL_O ? SYMBOL_X: SYMBOL_O);
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