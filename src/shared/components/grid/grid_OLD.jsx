// Dependencies
import React, { Component } from 'react';

// Components
import { GridWrapper, GridTitle, GridCards } from './grid.style'
import { Button, Card, StyledLink } from 'shared';

class Grid extends Component {
  state = {
    mockGridElements: [],
    gridItemsLength: 0,
    showCards: 4,
    isGridOpen: false,
  }
  componentWillMount = () => {
    this.setState({ mockGridElements: MOCK_GRID_ELEMENTS });
  }

  render() {
    const { mockGridElements } = this.state;
    this.state.gridItemsLength = mockGridElements.length;
    console.log(mockGridElements );
    return (
      <GridWrapper className={this.props.theme}>
        <GridTitle>
          <h2>{this.props.title}</h2>
        </GridTitle>
        <GridCards>
          {
            mockGridElements.slice(0, this.state.showCards).map(gridElement => {
              return (
                <StyledLink to={gridElement.fullPath} key={gridElement.id}>
                  <Card
                    title={gridElement.title}
                    icon={gridElement.image}
                    fullPath={gridElement.fullPath}
                    theme={"red-box"}>
                  </Card>
                </StyledLink>
              )
            })
          }
        <Button onClick={this.handleClick}>{this.props.button}</Button>
        </GridCards>
      </GridWrapper>
    )
  }
}

export default Grid;