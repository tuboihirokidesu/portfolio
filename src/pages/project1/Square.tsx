import React from 'react';
import styled from 'styled-components';

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

type Props = {
  val: string;
  chooseSquare: () => void;
};

const Square = ({ val, chooseSquare }: Props) => (
  <SquareWrap onClick={chooseSquare}>{val}</SquareWrap>
);

export default Square;
