//Dependencies
import styled from 'styled-components'

export const FooterWrapper = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  color: white;
  padding: 20px 40px;
  justify-content: space-between;
  min-height: 3rem;
  `;

export const Content = styled.div`
width: 100%;  
display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
  margin: 0 0 20px 0;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 50px 0 0;
`;

export const Title = styled.div`
  color: grey;
  border-bottom: 1px solid grey;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px 0 0 0;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-around;
  border-top: 1px solid grey;
  padding: 20px;
`;
