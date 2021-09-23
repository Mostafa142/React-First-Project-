import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Card extends Component {
    render() {
        let { title, awesome, desc } = this.props;
        return (
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-header text-center">{title}</div>
                <div className="card-body text-center">
                    <h5 className="card-title">
                        <FontAwesomeIcon icon={awesome} size="4x"></FontAwesomeIcon>
                    </h5>
                    <p className="card-text">
                        {desc}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;