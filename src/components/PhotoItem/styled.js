import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaa;  
  border-radius: 5px;  
  padding: 5px;
  margin: 5px;
`;

export const PhotoImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

export const PhotoTitle = styled.span`
  width: 150px;
  font-size: 16px;
  margin-top: 10px;  
`;

export const ItalicText = styled(PhotoTitle)`  
  font-style: italic;
  font-weight: bold;
`;
