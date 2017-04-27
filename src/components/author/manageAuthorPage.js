'use strict';
var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/AuthorApi');
var toastr = require('toastr');
var ManageAuthor = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function(transition, component) {
                if(component.state.dirty && !confirm('Do you really want to move?')) {
                    transition.abort();
                }
        }
    },
    getInitialState: function() {
        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    },
    isAuthorFormValid: function() {
        this.state.errors = {};
        var formValid = true;
        if(this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be more than 3 chanracter';
            formValid = false;
        }
        if(this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be more than 3 chanracter';
            formValid = false;
        }
        this.setState({errors: this.state.errors});
        return formValid;
    },
    setAuthorState: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        this.setState({author: this.state.author});
    },
    saveAuthor: function(event) {
        event.preventDefault();
        if (!this.isAuthorFormValid()) {
            return;
        }
        AuthorApi.saveAuthor(this.state.author);
        this.setState({dirty: false});
        toastr.success('Author saved');
        this.transitionTo('authors');
    },
    render: function(){
        return (
            <div>
            <AuthorForm author={this.state.author}
            onChange={this.setAuthorState}
            onSave={this.saveAuthor}
            errors ={this.state.errors} />
            </div>
        );
    }
});

module.exports = ManageAuthor;
