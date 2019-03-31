// Dependencies
import React, { Component } from 'react';

// Components
import {
  FooterWrapper,
  Content,
  Main,
  Card,
  Title,
  Links,
  Social,
  Copyright
} from './footer.style'
import { SocialMediaIcon, StyledLink } from 'shared';

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
            <Card>
            <Social>
              
              <SocialMediaIcon network="instagram" />
              <SocialMediaIcon network="facebook" />
              <SocialMediaIcon network="twitter" />
              </Social>
            </Card>
            
          
          </Main>
        </Content>
        <Copyright>
          <p>©2019 losTRAGOS.com</p>
          <p>Inspirada en Barcelona</p>
        </Copyright>
      </FooterWrapper>
    );
  }
}

export default Footer;
