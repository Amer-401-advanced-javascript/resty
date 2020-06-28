import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


class Main extends React.Component{
  render(){
    return <App />
  }
}
const rootElement = document.getElementById('root');

ReactDOM.render(<Main />, rootElement)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

