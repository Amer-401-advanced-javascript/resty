import React from "react";
// import './App.css';
import Header from "./components/header/header";
import Form from "./components/form/form";
import Footer from "./components/footer/footer.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
