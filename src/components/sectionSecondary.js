import React, { Component } from "react";
import Div from "./divComponents";

class SectionTwo extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        const { subTitleTwo , desc, secondarySubTitle } = this.props;

        return (
            <section>
                <h2>{subTitleTwo}</h2>
                <h3>{secondarySubTitle}</h3>
                <p>{desc}</p>    
                <Div />
            </section>
        )
    }
}

export default SectionTwo