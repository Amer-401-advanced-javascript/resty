import React from 'react';
import './form.scss'


class Form extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            url:'',
            method:''
        }
    }

    handleClick = (event)=>{
        event.preventDefault();
        let rest = document.getElementsByName('rest')
        let url = document.getElementById('url').value        
        for( let i =0; i < rest.length; i++){
            if(rest[i].checked){
                let method = rest[i].value           
                    this.setState({method})
                    this.setState({url})
            }
        }
    }

  render() {
    return (
        <> 
        <form>
            <label className='url'> URL</label>
            <input type='text' id='url'/>
            <button onClick={this.handleClick}>GO!</button>
            
            <label for='get'>GET</label>
            <input type='radio' name='rest' id='get' value='GET' />

            <label for='post'>POST</label>
            <input type='radio' name='rest' id='post' value='POST' />

            <label for='put'>PUT</label>
            <input type='radio' name='rest' id='put' value='PUT' />

            <label for='delete'>DELETE</label>
            <input type='radio' name='rest' id='delete' value='DELETE' />
        </form>
        
        <div id='result'>
            <p>{this.state.method} {this.state.url}</p>
        </div>
        </>
        
    )
  }
}

export default Form;