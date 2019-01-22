import React from 'react';
               // ACCESS NESTED DATA WITH REACT PROPS


class App3 extends React.Component{
  render(){
    return <Button> I <Heart/> React </Button>
  }
}

//creating stateless component button called 'button'
//retuning html button

const Button=(props) => <button>{props.children}</button>

// "props.children" is used to access nested values in component
// nested comp..

class Heart extends React.Component{
  render(){
    return <span> &hearts; </span>
  }
}

export default App3;
