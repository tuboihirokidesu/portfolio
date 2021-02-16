import styled from "styled-components";

type Props = {
  val: string;
  chooseSquare: () => void;
};

const Square: React.FC<Props> = ({ val, chooseSquare }) => {
  return <SquareWrap onClick={chooseSquare}>{val}</SquareWrap>;
};

export default Square;

const SquareWrap = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid #242424;
  flex: 33%;
  display: grid;
  font-size: 30px;
  align-items: center;
  justify-content: center;

  :active {
    background-color: #ebe048;
  }
`;
