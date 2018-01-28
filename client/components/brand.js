/* Custom brand.js without title */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { registerComponent } from "@reactioncommerce/reaction-components";
import { replaceComponent, composeWithTracker } from "/imports/plugins/core/components/lib";
import { Reaction } from "/client/api";

class myBrand extends Component {
  static propTypes = {
    logo: PropTypes.string,
    title: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    Reaction.Router.go("/");
  }

  render() {
    return (
      <a className="brand" onClick={this.handleClick}>
        {this.props.logo &&
          <div className="logo">
            <img src={this.props.logo} />
          </div>
        }
      </a>
    );
  }
}

//registerComponent("Brand", myBrand);
replaceComponent("Brand", myBrand);

export default myBrand;
