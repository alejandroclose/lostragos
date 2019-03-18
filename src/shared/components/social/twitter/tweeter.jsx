// Dependencies
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import BackgroundImg from '../twitter/twitter.style'


// Images
const twitterBackground = require('../twitter/icono_twitter.png');

const Twitter = () => (
    <Link to="//twitter.com/lostragos">
        <BackgroundImg src={twitterBackground} alt="twitter updates" />
    </Link>

);

export default Twitter;