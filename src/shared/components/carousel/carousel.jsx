// Dependencies
import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import { Card } from 'shared';

import { MOCK_CAROUSEL_ELEMENTS } from 'mocks/mockCarouselElements';

import { SliderWrapper } from './carousel.style'

export const Carousel = (props) => {
    const [mockCarouselElements, setMockCarouselElements] = useState(MOCK_CAROUSEL_ELEMENTS);
    const [carouselSettings, setCarouselSettings] = useState({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false
    })
    console.log(mockCarouselElements)
    return (
        <SliderWrapper>
            <h2>Las sugerencias</h2>
            <Slider {...carouselSettings} className={"carousel"}>
                {
                    mockCarouselElements.map(carouselElement => {
                        return (
                            <Card key={carouselElement.id}
                                title={carouselElement.title}
                                description={carouselElement.description}
                                icon={carouselElement.image}
                                fullPath={carouselElement.fullPath}
                                theme={"slider-box"}
                                seo={true}>
                            </Card>
                        )
                    })
                }
            </Slider>
        </SliderWrapper>
    )
};
