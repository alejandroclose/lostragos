// Dependencies

import styled from 'styled-components'

export const Wrapper = styled.article`
  
  &.slider-box {
    margin: 0 auto;
    max-width: 25vw;
  }

  header {
    color: #EA3840;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
    
  &.icons {
    max-width: 250px;
    margin: 5px 0 20px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: 2px solid #EA3840;

    header {
      height: 50px;
    }
  }

  &.images {
    width: 100%;
    margin: 5px 0 20px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    header {
      height: 75px;
    }
  }
    
  &:hover {
    font-weight: bold;
    box-shadow: 0px 0px 1px 0.3px #EA3840;
    filter: drop-shadow(0px 0px 0.5px #EA3840);
    }
  }
  
`
export const Image = styled.img`
  width: 250px;
  height: 350px;
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-size: 80px 80px;
  background-position: center;
`

export const Icon = styled.div`
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-position: center;

  &.icons{
    width: 200px;
  height: 150px;
    background-size: 80px 80px;
  }

  &.images{
    width: 250px;
  height: 250px;
    background-size: 250px 250px;
  }
`

export const Title = styled.header`
  &.images {
    border: 2px solid #EA3840;

  }
`
export const Text = styled.p``