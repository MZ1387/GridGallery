import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { Image } from '../App';
import Posts from '../Posts';
import { PostGrid, InfoGrid } from './PostGrid';
import { MiniUserGridStyled } from '../Profile/UserGrid';
import ProfileImage from '../Profile/ProfileImage';

const OverflowHidden = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const ModalStyled = styled.div`
  position: absolute;
  background: #fff;
  top: ${(props) => props.top}px;
  left: 25%;
  right: 25%;
  width: 600px;
  border: 2px solid #444;

  @media(max-width: 990px){
    left: 0; 
    right: 0; 
    top: ${({top}) => top}px; 
    width: auto; 
  }
`;

const Modal = ({ match, history }) => {
    let image = Posts[parseInt(match.params.id, 10) - 1];
  
    if (!image) return null;
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          height: '5000px',
          background: "rgba(0, 0, 0, 0.8)"
        }}
      >
        <ModalStyled
            top={window.scrollY + (window.innerHeight / 2) - 250}
        >
            <OverflowHidden />
            <PostGrid>
                <Image inModal index={image.id} />
                <InfoGrid>
                    <MiniUserGridStyled>
                        <ProfileImage mini />
                        <h3>User Name</h3>
                    </MiniUserGridStyled>
                    <div>
                        <h2>{image.title}</h2>
                    </div>
                    <div>13 Likes</div>
                </InfoGrid>
            </PostGrid>
        </ModalStyled>
      </div>
    );
  };

  export default Modal;