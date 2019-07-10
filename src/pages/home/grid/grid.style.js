// Dependencies
import styled from 'styled-components';

export const Glide = styled.div`
`

export const GlideTrack = styled.div`
`

export const GlideSlide = styled.ul`
`

export const GlideSlides = styled.li`
`

export const GridWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #f9f6ef;
`

export const GridTitle = styled.div`

`

export const GridCards = styled.div`
  max-width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  touch-action: pan-x;
  margin: 13px;
  display: flex;
  flex-direction: row;
  &::-webkit-scrollbar {
    display: none;
  }
`