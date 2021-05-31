import React from 'react';

class Contador extends React.Component { 
    
    constructor() { 
        super();
        this.state = {
            cuenta: 0
        }
        setInterval((state = this.state) => { 
            this.setState({ cuenta: state.cuenta + 1 });
        }, 1000)
    }

    com

    render() { 
        return <div>{ this.state.cuenta }</div>
    }
}

export default Contador;
