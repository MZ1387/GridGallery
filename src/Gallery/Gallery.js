import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';
import UserGrid from '../Profile/UserGrid';
import Posts from '../Posts';

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 305px);
    justify-content: center;
    gap: 20px;
    grid-auto-rows: 305px;
    ${(props) => props.cascade && css`
        grid-auto-rows: 200px;
        grid-gap: 5px;
    `}

    @media (max-width: 990px) {
        gap: 5px;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: calc(33vw - 10px);
    }
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

const ImageLink = styled(Link)`
  background: no-repeat center/150% url(./img/${(props) => props.index}.jpeg);
  :hover {
    opacity: .7;
  }

  ${(props) => props.cascade && css`
    background-size: cover;

    &:nth-of-type(2n) {
      grid-row-start: span 2;
    }
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
        <PhotoGrid cascade={cascade}>
            {Posts.map(i => (
            <ImageLink
                key={i.id}
                index={i.id}
                cascade={cascade}
                to={{
                pathname: `/img/ ${i.id}`,
                // this is the trick!
                state: { modal: true }
                }}
            />
            ))}
        </PhotoGrid>
        </div>
    );
}
