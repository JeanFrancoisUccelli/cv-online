import React, { Component } from 'react';
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
              <h4><a href='https://www.linkedin.com/in/jeff-uccelli' target='_blank'>Linked in :
                  {resumeData.linkedinId}                  
                </a></h4>
              <h4><a href='mailto:jeanfrancoisuccelli@gmail.com'>Mail :
                  Jeff Uccelli
              </a></h4>
              <h4><a href='https://drive.google.com/file/d/1IggHGIu7S4-L-WwAdlhYLJHzkZ5A5kK6/view?usp=sharing'>Mon CV en Francais au format pdf
              </a></h4>
              <h4><a href='https://drive.google.com/file/d/1kV7MMqwnxysKn53ARDAsoAb2VYx4_4ft/view?usp=sharing'>My CV in English in pdf format
              </a></h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}