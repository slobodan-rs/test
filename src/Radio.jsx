import styled from 'styled-components';

const RadioMark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #777777;
  width: 14px;
  height: 14px;
  left: 0;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
`;

const RadioInput = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${RadioMark} {
    &::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: blue;
      left: 2px;
      top: 15%;
      position: absolute;
    }
  }
`;
