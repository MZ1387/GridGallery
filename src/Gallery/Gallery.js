import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
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
    grid-template-columns: autp auto;
    justify-content: center;
`;

const TabLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 50px;
`;

export default ({ match }) => {
    return (
        <div>
        <UserGrid />
        <LinkGrid>
            <TabLink to={`${match.url}/test1`} >
                Square
            </TabLink>
            <TabLink to={{pathname: `${match.url}`, search:"?type=cascade"}} >
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