// Dependencies
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { BackgroundImg } from './social.style';

export const SocialMediaIcon = (props) => {
  const { network } = props;
  let linkTo;
  let imgSrc;
  let imgAlt;

  switch (network) {
    case 'instagram':
      linkTo = '//instagram.com/lostragos';
      imgSrc = require('assets/images/icono_ig.png');
      imgAlt = 'Link to LosTRAGOS.com Instagram profile'
    break;
    case 'facebook':
      linkTo = '//facebook.com/lostragos';
      imgSrc = require('assets/images/icono_fb.png');
      imgAlt = 'Link to LosTRAGOS.com Facebook profile'
    break;
    case 'twitter':
      linkTo = '//twitter.com/lostragos';
      imgSrc = require('assets/images/icono_twitter.png');
      imgAlt = 'Link to LosTRAGOS.com Twitter profile'
    break;
    default:
  };

  return (
    <Link to={ linkTo } target="blank">
      <BackgroundImg src={ imgSrc } alt={ imgAlt }/>
    </Link>
  );
}
