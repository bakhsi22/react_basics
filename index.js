import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import App2 from './App2.js';
import App3 from './App3.js';
import App4 from './App4.js';
import App5 from './App5.js';
import App6 from './App6.js';
import App7 from './App7.js';
class Hello extends React.Component{
    render(){
        return(
        <h1>Hello</h1>
        )
    }
}
class World extends React.Component{
    render(){
        return(
            <p>world2</p>
        )
    }
}
class HelloWorld extends React.Component{
    render(){
        return(
        <section>
            <Hello />
            <World />
        </section>
        )    
    }
}
ReactDOM.render(<HelloWorld/> , 
    document.getElementById('root'))
// ReactDOM.render(<App/> , 
//     document.getElementById('root'))
// ReactDOM.render(<App2/> , 
//     document.getElementById('root'))
// ReactDOM.render(<App3/> , 
//     document.getElementById('root'))
// ReactDOM.render(<App4/> , 
//     document.getElementById('root'))
// ReactDOM.render(<App5/> , 
//     document.getElementById('root'))
// ReactDOM.render(<App6/> , 
//     document.getElementById('root'))
// ReactDOM.render(<App7/> , 
//     document.getElementById('root'))