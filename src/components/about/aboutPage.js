'use strict';

var React = require('react');

var AboutPage = React.createClass({

    statics: {
        willTransitionTo: function(trasition, params, query, callback) {
            if(!confirm('Are you sure wanted to see this page?')) {
                trasition.abort();
            } else {
                callback();
            }
        },
        willTransitionFrom: function(trasition, component) {
            if(!confirm('Are you sure wanted to leave this page?')) {
                trasition.abort();
            }
        }
    },
    render: function(){
        return (
            <div>
                <h1>About Us</h1>
                <p>About page content</p>
            </div>
        );
    }
});

module.exports = AboutPage;
