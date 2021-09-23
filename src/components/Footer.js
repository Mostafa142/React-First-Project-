import React, { Component } from 'react';
import './styling.css';
import Footercard from './Footercard';
class Footer extends Component {
    render() {
        let { flists } = this.props
        return (
            <>
                <div className="x5 bg-dark text-light pt-5 pb-5">
                    {
                        flists.map((item, index) => {
                            return <Footercard key={item.id} title={item.title} icon1={item.icon1} icon2={item.icon2}
                                icon3={item.icon3} tex1={item.tex1} tex2={item.tex2} tex3={item.tex3} tex4={item.tex4}
                                tex5={item.tex5} tex6={item.tex6} />
                        })
                    }
                </div>
                <footer className="text-dark bg-warning text-center">
                    Sport © 2021 Sports Store. All Rights Reserved.Designed by<b> Mostafa Fathi</b>
                </footer>
            </>
        );
    }
}

export default Footer;