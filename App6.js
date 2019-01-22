import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
class App6 extends React.Component{
  constructor(){
    super();
    this.state = {a: ''}
    this.state = {b: ''}
  }
  update(e){
    this.setState({
      a: ReactDOM.findDOMNode(this.a).value ,
      b: this.refs.b.value
    })
  }
  render(){
    return(
      <div>
        <Input 
        // ref="a"
        ref={component => this.a = component}
        type="text"
        update={this.update.bind(this)}
        /> {this.state.a}
        
        <hr />

        <input 
        ref="b"
        type="text"
        onChange={this.update.bind(this)}
        /> {this.state.b}
      </div>
    )
  }
}
/////  referencing an instance of anothrer component
class Input extends React.Component{
  render(){
    return<input type="text" onChange=
    {this.props.update}/>
  }
}
 export default App6
