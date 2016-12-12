var React = require('react');
var NavBar = require('NavBar');

var Main = (props) => {
    return (
      <div>
        <div>
          <div>
            <NavBar/>
            <p>Main.jsx rendered</p>
            {props.children}
          </div>
        </div>
      </div>
    )
};

module.exports = Main;
