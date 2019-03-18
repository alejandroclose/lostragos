// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import { StyledLink } from '../../../shared/components/styledLink';
import { FooterWrapper, Content, Main, Card, Title, Links, Social, Copyright} from './footer.style'
import Fb from '../../../shared/components/social/facebook/facebook';
import Instagram from '../../../shared/components/social/instagram/instagram';
import Twitter from '../../../shared/components/social/twitter/tweeter'


// Constants
import { ROUTE_CONSTANTS } from 'shared';

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
                                <StyledLink to={ROUTE_CONSTANTS.SOBRE_NOSOTROS.SOBRE_NOSOTROS_MAIN.fullPath}>Sobre nosotros</StyledLink>
                                <StyledLink to={ROUTE_CONSTANTS.CONTACTO.CONTACTO_MAIN.fullPath}>Contacto</StyledLink>
                                <StyledLink to={ROUTE_CONSTANTS.CONTACTO.CONTACTO_MAIN.fullPath}>Anúnciate</StyledLink>
                            </Links>
                        </Card>
                        <Card>
                            <Title>
                                Legal
                        </Title>
                            <Links>
                                <StyledLink to={ROUTE_CONSTANTS.PRIVACIDAD.PRIVACIDAD_MAIN.fullPath}>Política de Privacidad</StyledLink>
                            </Links>
                        </Card>
                        <Social>
                            <Fb />
                            <Instagram />
                            <Twitter />
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