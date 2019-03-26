// Dependencies

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const Image = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid green;
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-size: 150px 150px;

`

export const Text = styled.div`

`