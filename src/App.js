import React from 'react';

class App extends React.Component {

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
               peopleinSpace: data.people 
            })
        })
    }

    render(){
        return null
    }
}

export default App; 
