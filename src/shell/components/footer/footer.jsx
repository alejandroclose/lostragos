// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import { StyledLink } from '../../../shared';

// Constants
import { ROUTE_CONSTANTS } from '../../../shared';

const FooterWrapper = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: white;
    padding: 20px 40px;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;  
    margin: 0 0 20px 0;
    justify-content: space-between;
`

const Main = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 50px 0 0;

`
const Title = styled.div`
    color: grey;
    border-bottom: 1px solid grey;
`

const Links = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5px 0 0 0;
`

const Social = styled.div`
`

const Copyright = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
    border-top: 1px solid grey;
    padding: 20px;
`

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <Content>
                <Main>
                <Card>
                    <Title>
                        losTRAGOS.com
                        </Title>
                    <Links>
                        <StyledLink to={ROUTE_CONSTANTS.SOBRE_NOSOTROS.SOBRE_NOSOTROS_MAIN.fullPath}>SOBRE NOSOTROS</StyledLink>
                        <StyledLink to={ROUTE_CONSTANTS.CONTACTO.CONTACTO_MAIN.fullPath}>CONTACTO</StyledLink>
                        <StyledLink to={ROUTE_CONSTANTS.CONTACTO.CONTACTO_MAIN.fullPath}>ANÚNCIATE</StyledLink>
                    </Links>
                </Card>
                <Card>
                    <Title>
                        Legal
                        </Title>
                    <Links>
                        <StyledLink to={ROUTE_CONSTANTS.PRIVACIDAD.PRIVACIDAD_MAIN.fullPath}>POLÍTICA DE PRIVACIDAD</StyledLink>
                    </Links>
                </Card>
                <Social>
                <StyledLink target="blank" to='http://facebook.com/lostragos'><img src='../'></img></StyledLink>
                </Social>
                </Main>
                </Content>
                <Copyright>
                    <div>©2019 losTRAGOS.com</div>
                    <div>Inspirada en Barcelona</div>
                </Copyright>
            </FooterWrapper>
        );
    }
}

export default Footer;