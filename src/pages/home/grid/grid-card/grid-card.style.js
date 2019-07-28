// Dependencies

import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 250px !important;
  margin: 5px 5px 20px 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 2px solid #D02936;

  &:hover {

    font-weight: bold;
    box-shadow: 0px 0px 1px 0.3px #D02936;
    filter: drop-shadow(0px 0px 0.5px #D02936);
`
export const Image = styled.div`
  width: 200px;
  height: 150px;
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-size: 80px 80px;
  background-position: center;
  }

`
export const Text = styled.div`
  height: 50px;
  color: #D02936;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  }
`