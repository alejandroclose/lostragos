import styled from 'styled-components';

export const SliderWrapper = styled.div`
    .slick-prev, .slick-next {
        z-index: 9999;
        
        &:before {
            color: #000;
        }
    }

    .slick-prev {
        left: 25px;
    }
    
    .slick-next {
        right: 25px;
    }
    
    .slider-box {
        text-align: center;
        header {
            text-transform: uppercase;
        }
    }
    
    .slick-slide {
        .slider-box {
            opacity: 0.6;
            p, header {
                display:none;
            }
            
            img {
                transform: scale(0.75);
            }
        }
    }
    
    .slick-slide.slick-center {
        .slider-box {
            opacity: 1;
            p, header {
                display: inline-block;
            }
            
            
            img {
                transform: scale(1);
            }
        }
    }
`;
