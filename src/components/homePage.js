'use strict';
var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbatron">
                <h1>PSADMIN</h1>
                <p>React, React Router, Flux</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
});

module.exports = Home;
