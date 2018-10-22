import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  };

  handleScroll() {
    let offset = window.pageYOffset;
    document.getElementById('parallax').style.backgroundPositionY = offset * 0.7 + "px";
  }

  render() {
    return (
      <React.Fragment>
        <div id="parallax" onScroll={this.handleScroll}>
           <h2>Div 1</h2>
        </div>
        <div>
          <h2>Div 2</h2>
        </div>
        <div>
          <h2>Div 3</h2>
        </div>
        <div>
          <h2>Div 4</h2>
        </div>
      </React.Fragment>

    );
  }
}

export default App;
