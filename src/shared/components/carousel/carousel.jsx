// Dependencies
import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import { Card } from 'shared';

import { MOCK_CAROUSEL_ELEMENTS } from 'mocks/mockCarouselElements';

import { BackgroundImg } from './carousel.style'

export const Carousel = (props) => {
    const [mockCarouselElements, setMockCarouselElements] = useState(MOCK_CAROUSEL_ELEMENTS);
    const [carouselSettings, setCarouselSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    })
    console.log(mockCarouselElements)
    return (
        <Slider {...carouselSettings}>
            {
                mockCarouselElements.map(carouselElement => {
                    return (
                        <Card
                            title={carouselElement.title}
                            icon={carouselElement.icon}
                            fullPath={carouselElement.fullPath}
                            theme={"red-box"}>
                        </Card>
                    )
                })
            }
        </Slider>
    )
};
