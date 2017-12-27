import React,{Component} from 'react';
import Header from './Header';
import FbButton from './FbButton';

class App extends Component{
  state ={ like:0 }

  componentWillMount(){
    console.log('App:willMMount')
  }

  componentDidMount(){
    console.log('App:didMount')
  }

  render(){
    return(
      <div>
        <Header>
          I am Header
        </Header>
        <h4>Like: {this.state.like}</h4>
        <h4>Dislike: {this.state.dislike}</h4>
        <FbButton handleClick={this.onLike} caption='Like'/>
        <FbButton handleClick={this.onDisLike} caption='DisLike'/>
        
        Heloo world
      </div>
    );
  }
  onLike=()=>{
    this.setState((prevState,props)=>{
      return{
        like:prevState.like+1
      }
    })
    this.setState((prevState,props)=>{
      return{
        like:prevState.like+1
      }
    })
    
  }
  onDisLike=()=>{
    this.setState({dislike:this.state.dislike+1})

  }
}
export default App;