'use strict';

var React = require('react');

var Input = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        value: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        error: React.PropTypes.string
    },
    render: function(){
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input type="text" name={this.props.name}
                    ref={this.props.name}
                    className="form-control"
                    onChange={this.props.onChange}
                    id={this.props.name}
                    placeholder={this.props.placeholder} value={this.props.value}/>
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
});

module.exports = Input;
