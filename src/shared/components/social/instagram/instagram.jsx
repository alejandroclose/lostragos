// Dependencies
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import BackgroundImg from '../instagram/instagram.style'


// Images
const instagramBackground = require('../instagram/icono_ig.png');

const Instagram = () => (
    <Link to="//instagram.com/lostragos">
        <BackgroundImg src={instagramBackground} alt="instagram profile" />
    </Link>

);

export default Instagram;