import React, { Component } from 'react';


export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/photo_portrait.png" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.address}</span>
                  <br />
                  <span>{resumeData.website}</span>
                  <br />
                  <span>Look at the bottom of this page for contact details</span>
                  <a href="#contact">
                    <img style={{ width:"18px", height:"18px", paddingLeft:"5px", paddingTop:"5px" }} src="images/round_keyboard_arrow_down_white_18dp.png" alt=""/>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>


      </section>;
  }
}