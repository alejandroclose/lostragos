// Dependencies
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import BackgroundImg from '../facebook/facebook.style'


// Images
const facebookBackground = require('../facebook/icono_fb.png');

const Fb = () => (
    <Link to="//facebook.com/lostragos">
        <BackgroundImg src={facebookBackground} alt="facebook page" />
    </Link>

);

export default Fb;