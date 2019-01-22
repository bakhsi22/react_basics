import React from 'react';
import './App.css';

class App extends React.Component{
  render(){
    let txt=this.props.txt
    let cat =  this.props.cat
    return<h1>{txt} {cat}</h1>
  }
}
App.propTypes={
  txt: "React.propTypes.string",
  cat: "React.propTypes.number.isRequired"
}
App.defaultProps={
  txt:"this is no :",
  cat:"5"
}

  export default App;



           



