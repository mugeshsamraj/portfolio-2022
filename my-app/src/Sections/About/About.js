import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span> 
          <span class="heading-sec__sub">
            I like to code things for web, and enjoy bringing ideas to life in the browser. 
            I'm always open to adapt to work with team and frontend skills and technology.
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Who's this guy?</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                I'm a <strong>Frontend Web Developer</strong> with Passionated 
                about sketching, photography, travelling and riding. Learned Web Development skill from Skill Safari Alchemyst Program.
              </p>
              <p class="about__content-details-para">
                I'm very curious about to learn new technical things. As per my knowledge I have made some projects.
                You can visit, Routes, Route
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong>contact</strong> me.
              </p>
            </div>
              <a href="./#contact" class="btn btn--med btn--theme">Contact</a>
          </div>
          {/* <div class="header__logo-img-cont">
            <img src="https://rakshithkotian-portfolio.netlify.app/images/kotian.png" class="header__logo-img" alt="Rakshith photo"/>
          </div> */}
        </div> 
        <div class="about__content-skills">
          <h3 class="about__content-title">My Skills</h3>
          <ul class="topic-list">
            <li> <span><img class="skill-img" src="https://rakshithkotian-portfolio.netlify.app/images/logos/html-5.png" alt="html"/></span>HTML5</li>
            <li><span><img class="skill-img" src="https://rakshithkotian-portfolio.netlify.app/images/logos/css-3.png" alt="html"/></span>CSS3</li>
            <li><span><img class="skill-img" src="https://rakshithkotian-portfolio.netlify.app/images/logos/js.png" alt="html"/></span>JavaScript</li>
            <li><span><img class="skill-img" src="https://rakshithkotian-portfolio.netlify.app/images/logos/bootstrap.png" alt="html"/></span>Bootstrap</li>
            <li><span><img class="skill-img" src="https://rakshithkotian-portfolio.netlify.app/images/logos/react.png" alt="html"/></span>React</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
};

export default About;