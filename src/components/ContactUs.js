import React, { Component } from "react";
var ReactGA = require("react-ga");

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                <a
                  href="https://www.linkedin.com/in/jeff-uccelli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linked in :{resumeData.linkedinId}
                </a>
              </h4>
              <h4>
                <a href="mailto:jeanfrancoisuccelli@gmail.com">
                  Mail : Jeff Uccelli
                </a>
              </h4>
              <h4>
                {/* <a
                  href="https://drive.google.com/file/d/1D5o6UD0n5d4Xoz-z22ma4hq-dFZi6eu1/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                > */}
                <ReactGA.OutboundLink
                  eventLabel="myLabel"
                  to="https://drive.google.com/file/d/1D5o6UD0n5d4Xoz-z22ma4hq-dFZi6eu1/view?usp=sharing"
                  target="_blank"
                >
                  Mon CV en Francais au format pdf
                </ReactGA.OutboundLink>
              </h4>
              <h4>
                <a
                  href="https://drive.google.com/file/d/1rF1SQpkz_sWxeLxjQnxRL-z6hGxyaXY4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My CV in English in pdf format
                </a>
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
