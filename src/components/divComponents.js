import React, { Component } from "react";

class Div extends Component {
    constructor () {
        super()
        this.state = {action: "Dar click en boton para cambiar al siguiente componente", component: "Componentes funcionales", desCompnent: "Son los más usados: representan una función de JavaScript, retornan a un elemento JSX de React, comienzan con mayúscula y pueden recibir valores."}
    }

    componentDidMount (prevProps, prevState) {
        console.log(this.state);   
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.component !== this.state.component) {
            this.setState({action: "El componete ha cambiado"})
        } 

        console.log(this.state);
    }

    render () {
        return (
            <div>
                <p>{this.state.component}:</p>
                <p>{this.state.desCompnent}</p>
                <p>{this.state.action}</p>
                <button onClick={()=> this.setState({component: "Componentes de Clase", desCompnent: "Se refiere a los componentes que están escritos en JavaScript moderno de una manera más elaborada: retornan a un elemento JSX a través de un método render y también es posible que se les asigne valores."})}>{this.state.component}</button>
            </div>      
        )
    }
}

export default Div