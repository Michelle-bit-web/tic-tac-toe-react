import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard( {onSelectSquare, currentPlayerSymbol} ) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectedSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard].map(colArray => [...colArray]);
            updatedBoard[rowIndex][colIndex] = currentPlayerSymbol;
            return updatedBoard
        })
        onSelectSquare()
    }

    return <ol id="game-board">
        { gameBoard.map( (row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map( (playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={() => handleSelectedSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li> ) }
    </ol>
}