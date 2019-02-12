import styled, { css } from 'styled-components';

export default styled.div`
    width: 200px;
    height: 200px;
    background: no-repeat center/170% url(/img/profile.jpeg);
    border-radius: 100px;
    margin: 40px;
    ${(props) =>  props.mini && css`
        width: 50px;
        height: 50px;
        margin: 5px;
    `}
`;