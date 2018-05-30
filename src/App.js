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
          <img className="logo" src={require('./images/logo2.png')} alt=""/>
          <div className="down">
            <button>DOWNLOAD</button>
          </div>
        </div>
        <div className="header-img">
          <img src="https://avatars2.githubusercontent.com/u/15263326?s=460&v=4" alt=""/>
        </div>
      </div>
    );
  }
}

export default App;
