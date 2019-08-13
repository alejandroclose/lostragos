// Dependencies
import styled from 'styled-components';

export const GridWrapper = styled.div`
  padding: 15px;
  color: #EA3840;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #f9f6ef;

&.grid-icons-red{
  color: #EA3840;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #f9f6ef;
}

&.grid-icons-image{

}
`

export const GridTitle = styled.div`
  border-bottom: 1.5px solid #EA3840;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 1.1rem;
`

export const GridCards = styled.div`
  max-width: 1000px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`