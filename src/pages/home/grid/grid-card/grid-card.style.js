// Dependencies

import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 10px 10px 40px 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 3px solid #D02936;
`
export const Image = styled.div`
  width: 250px;
  height: 200px;
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-size: 100px 100px;
  background-position: center;

`

export const Text = styled.div`
  height: 50px;
  color: #D02936;
`