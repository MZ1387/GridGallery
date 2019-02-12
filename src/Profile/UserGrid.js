import React from "react";
import styled from 'styled-components';
import ProfileImage from "./ProfileImage";

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    gap: 15px;
    grid-template-areas: 
        'photo name'
        'photo label'
        'photo description';
    
    @media (max-width: 990px) {
        grid-template-areas: 
            'photo name'
            'label .'
            'description .';
    }
`;

export const MiniUserGridStyled = styled.div`
    display: grid;
    justify-content: left;
    grid-template-columns: auto auto;
    gap: 10px;
`;

const Photo = styled.div`
    grid-area: photo;
`;

const Name = styled.div`
    grid-area: name;
    font-size: 35px;
    align-self: center;
`;

const Label = styled.div`
    grid-area: label; 
    
    @media (max-width: 990px) {
        padding-left: 25px;
    }
`;

const Description = styled.div`
    grid-area: description;
    max-width: 400px;

    @media (max-width: 990px) {
        padding-left: 25px;
        grid-column: 1 / 3;
    }
`;


export default () => {
    return (
        <UserGridStyled>
            <Photo>
                <ProfileImage />
            </Photo>
            <Name>Mario Zamora</Name>
            <Label>
                <strong>13,000</strong> Followers
            </Label>
            <Description>
                Hoodie artisan wayfarers kitsch gentrify hella deep v. Hella hammock hexagon helvetica leggings, organic jean shorts slow-carb readymade letterpress wolf. Live-edge sartorial freegan kickstarter kombucha. Subway tile whatever wolf sriracha you probably haven't heard of them brooklyn franzen flexitarian keffiyeh gluten-free iPhone roof party. Hashtag pug hot chicken shabby chic crucifix franzen sartorial copper mug drinking vinegar helvetica.
            </Description>
        </UserGridStyled>
    );
}