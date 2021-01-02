import React, { Component } from 'react'
import './main.css'
import './form.css'
import Form from "./form";

class Main extends Component {
  render() {
    return (
        <main>
            <section id="about" className="about">
                <h2>About Us</h2>
                <div>
                  <p>Every year you take a resolution. There are some that you fulfill but others at which you fail. A quick trivia: If you let your friends know about your resolution, you would be psychologically more driven to complete it. This year, take it a step further and let the WORLD KNOW! We will help you with that. On 2021Resolutions, people from around the globe can see what resolutions you have taken up for yourself. You can also check-out what others have been up to and build a community of people with common goals and dreams to be achieved this year. BUILD YOURSELF IN 2021!</p>
                </div>
            </section>

            <div>
                <div className="services">
                  <div className="service__one">
                  <p className="service__icon"><i className="fas fa-calendar-alt"></i></p>
                  <p className="service__title">Planning</p>
                  <p>Plan your resolutions with a start and end date.</p>
                  </div>
                  <div className="service_two">
                  <p className="service__icon"><i className="fas fa-pencil-alt"></i></p>
                  <p className="service__title">Tracking</p>
                  <p>Note your progress and keep in track with your goals.</p>
                  </div>
                  
                </div>
            </div>

            <div id="portofolio" className="gallery">
              <div className="gallery__item__one"></div>
              <div className="gallery__item__two"></div>
              <div className="gallery__item__three"></div>
              <div className="gallery__item__four"></div>
              <div className="gallery__item__five"></div>
              <div className="gallery__item__six"></div>
            </div>



            <section id="contact">
              <h2 className="form__h2">E-mail Us</h2>
              <Form />
            </section>
        </main>
    )
  }
}

export default Main;