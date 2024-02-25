import { Component } from 'react';
//import Button from './components/Button';
import QuotesMachine from './components/QuotesMachine'
import { random } from 'lodash';
import { Grid} from '@mui/material';
import {withStyles} from '@mui/styles';


const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh'
    
    
  }
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      qoutes: [],
      selectedqoutesIndex: null
    }
    this.assignNewqoutesIndex = this.assignNewqoutesIndex.bind(this);
    this.selectQoutesIndex = this.selectQoutesIndex.bind(this);
  }


  componentDidMount(){
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data => data.json())
    .then(qoutes => this.setState({qoutes}, this.assignNewqoutesIndex));
  }  

  get selectedqoutes() {
    if(!this.state.qoutes.length || !Number.isInteger(this.state.selectedqoutesIndex)) {
      return undefined; 
    }
    return this.state.qoutes[this.state.selectedqoutesIndex];
  }
  /**
   * return an integer representing an index in state.qoute
   */

  selectQoutesIndex() {
   if (!this.state.qoutes.length){
    return undefined;
   }
   return random(0, this.state.qoutes.length -1) 
  }


  nextqoutesClickHandler() {
    console.log("you have been haceked");
  }

  assignNewqoutesIndex(){
    this.setState({selectedqoutesIndex: this.selectQoutesIndex() })
  }

 render() {
  return (
    <Grid className={this.props.classes.container} id="quote-box" justifyContent="center" container>
        <Grid xs={11} lg={8} item>
           {
            this.selectedqoutes?
            <QuotesMachine selectedqoutes = {this.selectedqoutes} assignNewqoutesIndex ={this.assignNewqoutesIndex}/>:null
            }
        </Grid>
    </Grid>
  );
 }
}

export default withStyles(styles)(App);
