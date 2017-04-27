'use strict';

var React = require('react');
var Input = require('../common/textInput');


var authorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSave: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function(){
        return (
                <div className="col-md-6 col-md-offset-3">
                <form>
                    <h1>Manage Author</h1>
                    <Input name="firstName"
                    value={this.props.author.firstName}
                    label="First Name" placeholder="First Name"
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName} />

                    <Input name="lastName"
                    value={this.props.author.lastName}
                    label="Last Name"
                    placeholder="Last Name"
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName} />


                    <button type="submit" className="btn btn-default" onClick={this.props.onSave}>Save</button>
                </form>
                </div>
            );
    }
});

module.exports = authorForm;

