'use strict';
var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Page not found</h1>
                <p>Woops! there is noting to see here</p>
                <p><Link to="app">Back to Home</Link></p>

            </div>
        );
    }
});

module.exports = Home;
