import { useEffect, useState } from "react";
import styled from "styled-components";
import { patterns } from "../../components/project1/patterns";
import Square from "./Square";

const NoughtsAndCrosses = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    switch (result.state) {
      case "Won":
        alert(`${result.winner}の勝利`);

        break;
      case "Tie":
        alert(`ドロー、、決着つかず`);

        break;

      default:
        break;
    }
    restartGame();
  }, [result]);

  const chooseSquare = (square: number) => {
    setBoard(
      board.map((val, id) => {
        if (id === square && val === "") {
          return player;
        }

        return val;
      })
    );
  };

  const checkWin = () => {
    patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currentPattern.forEach((id) => {
        if (board[id] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <Container>
      <Wrap>
        <Row>
          <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />
        </Row>
        <Row>
          <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
          <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
          <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
        </Row>
        <Row>
          <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
          <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
          <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />
        </Row>
      </Wrap>
    </Container>
  );
};

export default NoughtsAndCrosses;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #b3df3a;
  border: 1px solid #242424;
`;
const Row = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
`;
