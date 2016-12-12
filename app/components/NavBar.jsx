var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavBar = () => {
    return (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://github.com/jdhorwitz" target="_blank">Josh Horwitz</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = NavBar;