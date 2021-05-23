import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  border: ${(props) => (props.selected ? "2px solid blue" : "1px solid #aaa")};
  padding: 5px;
  margin: 5px;
`;

export const AlbumImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-right: 10px;
`;

export const AlbumTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => (props.selected ? "blue" : "black")};  
`;
