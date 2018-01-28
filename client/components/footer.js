import React, { Component }  from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { Components } from "@reactioncommerce/reaction-components";
import { registerComponent } from "/imports/plugins/core/components/lib";
import { replaceComponent, composeWithTracker } from "/imports/plugins/core/components/lib";
import { TagList, TagItem } from "/imports/plugins/core/ui/client/components";
import { getTagIds } from "/lib/selectors/tags";
import { DragDropProvider } from "/imports/plugins/core/ui/client/providers";
import { TagHelpers } from "/imports/plugins/core/ui-tagnav/client/helpers";
import _ from "lodash";

class myFooter extends Component {
  static propTypes = {
    shop: PropTypes.object,
    visibility: PropTypes.object.isRequired
  };

  static defaultProps = {
    visibility: {
      tags: true,
    }
  };

  state = {
    navBarVisible: false
  }

  toggleNavbarVisibility = () => {
    const isVisible = this.state.navBarVisible;
    this.setState({ navBarVisible: !isVisible });
  }

  handleCloseNavbar = () => {
    this.setState({ navBarVisible: false });
  }

  renderTagItem() {
    return (
      <ul>
        <Components.TagItem
          isVisible={this.state.navBarVisible}
          closeNavbar={this.handleCloseNavbar}
          {...this.props}
        >
<p>{this.props.tag}</p>
        </Components.TagItem>
      </ul>
    );
  }

  render() {
    return (
      <div className="reaction-navigation-footer footer-default">
       <nav className="navbar-bottom" role="navigation">
        <div className="col-xs-6 col-sm-3">
         <h5 className="footer-heading"> SHOP </h5>
         { this.props.visibility.tags && this.renderTagItem() }
         <li><a href={"tag/${this.props.slug}"}>{this.props.name}</a></li>
        </div>
        <div className="col-xs-6 col-sm-5 footer-text">
          <h5 className="footer-heading"> OUR ADDRESS </h5>
           <address>
            544&#47;2168<br></br>
            ILMAS BAGH<br></br>
            HASRAT TOWN<br></br>
            LUCKNOW - 226003<br></br>
            <i className="fa fa-phone"></i>: <a href="tel:+919980169212">+91-9980169212</a><br></br>
            <i className="fa fa-phone"></i>: <a href="tel:+91990976617">+91-990976617</a><br></br>
            <i className="fa fa-envelope"></i>: <a href="mailto:wovenz@outlook.com">wovenz@outlook.com</a><br></br>
           </address>
         </div>
         <div className="col-xs-12 col-sm-4 footer-social-media-icons">
           <h5 className="footer-heading"> Follow Us at: </h5>
           <div className="nav navbar">
            <a className="btn btn-social-icon btn-google-plus" href="http://google.com/+wovenz" target="_blank"><i className="fa fa-google-plus"></i></a>
            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/wovenz/" target="_blank"><i className="fa fa-facebook"></i></a>
            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/xclusive_wovenz" target="_blank"><i className="fa fa-twitter"></i></a>
            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/xclusive_wovenz/" target="_blank"><i className="fa fa-instagram"></i></a>
            <a className="btn btn-social-icon btn-pinterest" href="https://www.pinterest.com/wovenz/" target="_blank"><i className="fa fa-pinterest"></i></a>
          </div>
        </div>
       </nav>
       <div className="col-xs-12 footer-copyright">
        <p>&copy;Copyright 2017 Wovenz </p>
       </div>
      </div>
    );
  }
}

// Register react component.
// Now myFooter can be accessed anywhere on the client with the name "myFooter"

// Override default Footer with myFooter
replaceComponent("Footer",myFooter);

export default myFooter;
