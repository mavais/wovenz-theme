import React, { Component }  from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { replaceComponent, composeWithTracker } from "/imports/plugins/core/components/lib";
import { Tags } from "/lib/collections";

class myFooter extends Component {
  constructor(props) {
    super(props);
  }

  SideLinksTag = (tags) => {

    const TagList = _.compact(tags);
    let tagsData = [];
    let listItems = {};
    if (Array.isArray(TagList)) {
      for (const tagItem of TagList) {
        const tagId = tagItem._id;
        const tagName = tagItem.name;
        const tagSlug = tagItem.slug;
        const uri = '/tag/slug';
        tagsData.push({ id: tagId, name: tagName, slug: tagSlug, uri: uri.replace(/slug/g, tagSlug)});
      }
    listItems = (
     <ul className="list-unstyled">
      {tagsData.map((tagData) => 
          <li key={tagData.tagId}>
           <a href={tagData.uri}>{tagData.name}</a>
          </li> 
        )
      }
     </ul>
    );
  }
   return (
     <div>
       { listItems } 
     </div>
   );
 }

  render() {
   const tags = Tags.find({
        isTopLevel: true
      }).fetch();

    return (
      <div className="reaction-navigation-footer footer-default">
       <nav className="navbar-bottom" role="navigation">
        <div className="col-xs-6 col-sm-3">
         <h5 className="footer-heading"> SHOP </h5>
           <div className="footer-text">
           {this.SideLinksTag(tags)}
           </div>
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
