import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';
import UserGrid from '../Profile/UserGrid';
import { Image } from '../App';
import Posts from '../Posts';

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 305px);
    gap: 20px;
    justify-content: center;
`;

const LinkGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px
`;

const TabLink = styled(Link)`
    text-decoration: none;
    color: #ccc;
    text-transform: uppercase;
    letter-spacing: 3px;
    ${(props) => props.selected && css`
        color: black;
    `}
`;

export default ({ match, location }) => {
    const cascade = location.search === '?type=cascade';
    return (
        <div>
        <UserGrid />
        <LinkGrid>
            <TabLink 
                selected={!cascade}
                to={`${match.url}`} 
            >
                Square
            </TabLink>
            <TabLink
                selected={cascade}
                to={{ pathname: `${match.url}`, search:"?type=cascade" }} 
            >
                Cascade
            </TabLink>
        </LinkGrid>
        <PhotoGrid>
            {Posts.map(i => (
            <Link
                key={i.id}
                to={{
                pathname: `/img/ ${i.id}`,
                // this is the trick!
                state: { modal: true }
                }}
            >
                <Image index={i.id} />
            </Link>
            ))}
        </PhotoGrid>
        </div>
    );
}