import React from 'react';
// import ReactDOM from 'react-dom';

    //////      Normalise events with react synthetic event
class App5 extends React.Component{
 constructor(){
   super();
   this.state = {currentEvent: '---'}
   this.update = this.update.bind(this)
 }
 update(e){
   this.setState({currentEvent: e.type})
 }
  render(){
    return(
      <div>
        <textarea
        onKeyPress={this.update}
        onCopy={this.render.update}
        onPaste={this.update}
        onCut={this.update}
        onFocus={this.update}
        onBlur={this.update}
        onDoubleClick={this.update}
        
        cols="30"
        rows="10"
      />
        <h1>{this.state.currentEvent}</h1>
      </div>

    )
  }
}
 export default App5;
