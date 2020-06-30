import React from "react";
// import './App.css';
import Header from "./components/header/header";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";
import Result from './components/results/results';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      result:[],
    }
  }

 handleSubmitResult = (counter, result) => {
   console.log(counter,'<============================counter');
   
   this.setState({counter, result})
 }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler = {this.handleSubmitResult} />
        <Result count = { this.state.counter} result = {this.state.result} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
