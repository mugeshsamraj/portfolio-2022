import React from 'react';
import './Project.css';

function Project() {
  return (
    <>
      <section id="projects" class="projects sec-pad">
      <div class="main-container container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
            Here you will find some of the projects that I
            created included basic cloning of websites to personal websites.
          </span>
        </h2>

        <div class="grid-section row">
          <div class="grid pjt1">
            <a href="https://hopeful-kilby-c97d5a.netlify.app/" target="_blank">
              <div class="grid-img">
                <img
                  src="https://rakshithkotian-portfolio.netlify.app/images/swiggy.png"
                  alt="frontend mentor social proof section project"
                />
              </div>
              <div class="overlay">
                <h4>Swiggy page</h4>
                <h5>HTML5 / CSS3</h5>
              </div>
            </a>
          </div>
          <div class="grid pjt2">
            <a href="https://hopeful-hawking-494e7d.netlify.app/" target="_blank">
              <div class="grid-img">
                <img src="https://rakshithkotian-portfolio.netlify.app/images/red%20bus.png" alt="travel agency project" />
              </div>
              <div class="overlay">
                <h4>Red Bus</h4>
                <h5>
                  HTML5 / CSS3
                </h5>
              </div>
            </a>
          </div>
          {/* <div class="grid pjt3 ">
            <a href="" target="_blank">
              <div class="grid-img">
                <img src="https://rakshithkotian-portfolio.netlify.app/images/linkedIn2.png" alt="weather project" />
              </div>
              <div class="overlay">
                <h4>LinkedIn profile</h4>
                <h5>
                  HTML5 / CSS3
                </h5>
              </div>
            </a>
          </div> */}
          <div class="grid pjt4">
            <a href="https://ekh6e8.csb.app/" target="_blank">
              <div class="grid-img">
                <img
                  src="https://rakshithkotian-portfolio.netlify.app/images/todo.png"
                  class="desktop-img"
                  alt="darts project"
                />
              </div>
              <div class="overlay">
                <h4>To-Do App</h4>
                <h5>
                  HTML5 / CSS3 / JavaScript
                </h5>
              </div>
            </a>
          </div>
          {/* <div class="grid pjt5">
            <a href="https://ocy0ku.csb.app/" target="_blank">
              <div class="grid-img">
                <img
                  src="https://rakshithkotian-portfolio.netlify.app/images/calci1.png"
                  class="desktop-img"
                  alt="darts project"
                />
              </div>
              <div class="overlay">
                <h4>Calculator</h4>
                <h5>
                  HTML5 / CSS3 / JavaScript
                </h5>
              </div>
            </a>
          </div> */}
          <div class="grid pjt6">
            <a href="https://g5g17l.csb.app/" target="_blank">
              <div class="grid-img">
                <img
                  src="https://rakshithkotian-portfolio.netlify.app/images/website.png"
                  class="desktop-img"
                  alt="darts project"
                />
              </div>
              <div class="overlay">
                <h4>Website builded by REACT Components</h4>
                <h5>
                  HTML5 / CSS3 / JavaScript / React
                </h5>
              </div>  
            </a>
          </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default Project