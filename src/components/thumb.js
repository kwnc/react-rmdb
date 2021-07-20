import React from 'react';
import styled from "styled-components";

const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transform: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;

    :hover {
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
`;

const Thumb = ({image, movieId, clickable}) => (
    <div>
        <Image src={image} alt="movie-thumb" />
    </div>
)

export default Thumb;