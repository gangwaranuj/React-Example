import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';


class App extends React.Component{

    render(){
        return <Example propArray={[1,2,3]}
        propBool= {true} 
        />
    }
}



ReactDOM.render(<App/>, document.getElementById('root'));