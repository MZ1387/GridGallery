import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { css } from 'styled-components';
import Gallery from "./Gallery/Gallery";
import Modal from './Modal/Modal';

class ModalSwitch extends React.Component {
  // We can pass a location to <Switch/> that will tell it to
  // ignore the router's current location and use the location
  // prop instead.
  //
  // We can also use "location state" to tell the app the user
  // wants to go to `/img/2` in a modal, rather than as the
  // main page, keeping the gallery visible behind it.
  //
  // Normally, `/img/2` wouldn't match the gallery at `/`.
  // So, to get both screens to render, we can save the old
  // location and pass it to Switch, so it will think the location
  // is still `/` even though its `/img/2`.
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Gallery} />
          <Route path="/img/:id" component={Modal} />
        </Switch>
        {isModal ? <Route path="/img/:id" component={Modal} /> : null}
      </div>
    );
  }
};

export const Image = styled.div`
  width: 305px;
  height: 305px;

  @media (max-width: 990px) {
    width: 100%;
  }

  background: no-repeat center/150% url(./img/${(props) => props.index}.jpeg);
  ${(props) => !props.inModal && css`
    :hover {
      opacity: .7;
    }
  `}
`;

function ModalGallery() {
  return (
    <Router basename="React_Grid-Gallery">
      <Route component={ModalSwitch} />
    </Router>
  );
}

export default ModalGallery;
