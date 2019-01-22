import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';
 // React component lifecycle methods

            //// when comp is added to DOM is called"mounting"
            //// and when removed is called unmounting
            //// it has varoius lifecycle methids


            class App7 extends React.Component{
              constructor(){
                super();
                this.state={val:0}
                this.update=this.update.bind(this)
              }
                update(){
                  this.setState({val: this.state.val +1})
                }
                componentWillMount(){
                  console.log('componentWillMount')
                }
                
                render(){
                  console.log('render');
                  return<button onClick={this.update}>{this.state.val}</button>
                }
                componentDidMount(){
                  console.log('componentDidMount')
                }
                componentWillUnmount(){
                  console.log('componentWIllUnmount')
                }
          
              }
export default App7