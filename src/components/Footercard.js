import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Footercard extends Component {
    render() {
        let { id, title, icon1, icon2, icon3, tex1, tex2, tex3, tex4, tex5, tex6 } = this.props
        return (
            <ul key={id} className="list-unstyled">
                <h3 className="text-warning">{title}</h3>
                <hr className="text-warning" />
                <li className="m-1"><FontAwesomeIcon icon={icon1} />{tex1}</li>
                <li className="m-1"><FontAwesomeIcon icon={icon2} />{tex2}</li>
                <li className="m-1"><FontAwesomeIcon icon={icon3} />{tex3}</li>
                <li className="m-1">{tex4}</li>
                <li className="m-1">{tex5}</li>
                <li className="m-1">{tex6}</li>
            </ul>
        );
    }
}

export default Footercard;