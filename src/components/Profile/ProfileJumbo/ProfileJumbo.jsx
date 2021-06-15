import React, { Component } from "react";
//Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../ProfilePage.css";
import { Card, Image, Nav, Button } from "react-bootstrap";
import { Pencil, CameraFill } from "react-bootstrap-icons";

//Modals for Updating
import ProfileJumboUpdater from "./ProfileJumboUpdater";
import ProfilePicUpdater from "./ProfilePicUpdater";
export default class ProfileJumbo extends Component {
  state = {
    showModalJumbo: false,
    showModalProfilePic: false,
  };
  closeJumboModal = () => {
    this.setState({ showModalJumbo: false, showProfilePicModal: false });
  };
  render() {
    const styling = {
      position: "absolute",
      left: "0px",
      bottom: "0px",
      zIndex: "99",
    };

    const { image, surname, name, title, area, username, bio } = this.props;
    return (
      <>
        <Card className="my-2 ">
          <div id="jumboProfile_header">
            <img src="https://picsum.photos/900?grayscale"></img>
          </div>
          <Card.Body>
            <>
              <div
                id="jumboProfile_img"
                onClick={() => this.setState({ showProfilePicModal: true })}
              >
                <Image src={image} />
              </div>
            </>
            <Card.Title id="jumboProfile_title" className="mt-5">
              <h5>
                {name} {surname}
              </h5>
              <Pencil onClick={() => this.setState({ showModalJumbo: true })} />
            </Card.Title>
            <Card.Text>
              <p>
                {title}
                <br />
              </p>
              <span className="location-line text-muted">
                {area} &#183; <a href="#">Contact Info</a>
              </span>
              <span></span>
              <p className="text-primary" id="jumboprofile_connections_text">
                <b>78 Connections</b>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <ProfileJumboUpdater
          area={area}
          name={name}
          title={title}
          username={username}
          surname={surname}
          image={image}
          bio={bio}
          open={this.state.showModalJumbo}
          close={this.closeJumboModal}
        />
        <ProfilePicUpdater
          image={image}
          open={this.state.showProfilePicModal}
          close={this.closeJumboModal}
        />
      </>
    );
  }
}