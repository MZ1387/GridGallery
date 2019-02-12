import React from "react";
import styled from 'styled-components';
import ProfileImage from "./ProfileImage";

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    grid-template-areas: 
        'photo name'
        'photo label'
        'photo description'
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
`;

const Label = styled.div`
 grid-area: label;    
`;

const Description = styled.div`
    grid-area: description;
    max-width: 400px;
`;


export default () => {
    return (
        <UserGridStyled>
            <Photo>
                <ProfileImage />
            </Photo>
            <Name>Name</Name>
            <Label>
                <strong>13,000</strong> Followers
            </Label>
            <Description>
                Hoodie artisan wayfarers kitsch gentrify hella deep v. Hella hammock hexagon helvetica leggings, organic jean shorts slow-carb readymade letterpress wolf. Live-edge sartorial freegan kickstarter kombucha. Subway tile whatever wolf sriracha you probably haven't heard of them brooklyn franzen flexitarian keffiyeh gluten-free iPhone roof party. Hashtag pug hot chicken shabby chic crucifix franzen sartorial copper mug drinking vinegar helvetica.
            </Description>
        </UserGridStyled>
    );
}