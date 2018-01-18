import React, { Component }  from "react";
import { registerComponent } from "/imports/plugins/core/components/lib";
import { replaceComponent, composeWithTracker } from "/imports/plugins/core/components/lib";

class myFooter extends Component {
   render() {
     return (
       <div>
          <div className="reaction-navigation-footer footer-default">
           <nav className="navbar-bottom" role="navigation">
            <div className="row">
               <div className="col-xs-6 col-sm-3">
               </div>
               <div className="col-xs-6 col-sm-5 footer-text">
                 <h5 className="footer-heading"> OUR ADDRESS </h5>
                 <address>
                    544&#47;2168<br></br>
                    ILMAS BAGH<br></br>
                    HASRAT TOWN<br></br>
                    LUCKNOW - 226003<br></br>
                    <i className="fa fa-phone"></i>: +91-9980169212<br></br>
                    <i className="fa fa-phone"></i>: +91-990976617<br></br>
		    <i className="fa fa-envelope"></i>: wovenz@gmail.com<br></br>
                 </address>
               </div>
               <div className="col-xs-12 col-sm-4 footer-social-media-icons">
                 <h5 className="footer-heading"> Follow Us at: </h5>
                 <div className="nav navbar">
                    <a className="btn btn-social-icon btn-google-plus" href="http://google.com/+wovenz"><i className="fa fa-google-plus"></i></a>
                    <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/wovenz/"><i className="fa fa-facebook"></i></a>
                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                 </div>
               </div>
            </div>
           </nav>
          </div>
          <div className="col-xs-12 footer-copyright">
             <p>&copy;Copyright 2017 Wovenz </p>
          </div>
       </div>
     )
   }
}
 

// Register react component.
// Now myFooter can be accessed anywhere on the client with the name "myFooter"

// Override default Footer with myFooter
replaceComponent("Footer",myFooter);

export default myFooter;
