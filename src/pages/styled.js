import styled from "styled-components";

export const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

export const Col = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0px;
`;

export const ListContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SearchInput = styled.input`
  height: 30px;
  margin: 5px;
`;
