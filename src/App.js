import React, { Component } from 'react';
import './App.scss';
// import logo from '../public/logo2.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          {/* <img className="logo" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/483/868140483_80f7996c-0044-4232-bed9-8b44e1dc1632.png?cb=1527665535" alt=""/> */}
          <div className="links">
            <a className="github" href="https://github.com/flyliu0723"></a>
            <a className="blog" href="https://flyliu0723.github.io/flyblog/"></a>
          </div>
          <div className="logo"><img src={require('./images/logo2.png')} alt=""/></div>
          
          <div className="down">
            <button>DOWNLOAD</button>
          </div>
        </div>
        <div className="header-img">
          <img src="https://avatars2.githubusercontent.com/u/15263326?s=460&v=4" alt=""/>
        </div>

        <div className="menus">
          <span className="active">About</span>
          <span>Projects</span>
          <span>Education</span>
          <span>Blog</span>
        </div>
        <div id="about" className="message">
          <div className="intro">
            Hello! my name if fly, i am 24 years old,My job is a front-end engineer.
            welcome to my resume web.
            <br/>
            Here, you will have an in-depth understanding of me.
            <br/>
            You can learn about my education experience and project experience here.
          </div>
          <div className="devider"></div>
          <div className="technology">
            <div className="container">
              <span className="title">My Skills & Abilities</span>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default App;
