import React, { Component } from "react";

class Section extends Component {
    constructor(props){
        super (props)
    }

    render() {
        const { subTitle, desc, } = this.props;

        return (
            <section>
                <h3>{subTitle}</h3>
                <p>{desc}</p>
            </section>
        )    
    }
}

export default Section