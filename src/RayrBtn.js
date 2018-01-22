import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrBtn extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf(['info', 'success', 'warning', 'error'])
    };

    static defaultProps = {
        type: 'info'
    };

    render() {
        return (
            <button className="rayr-btn">rayr-btn</button>
        );
    }
}

export default RayrBtn;
