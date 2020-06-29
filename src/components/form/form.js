import React from 'react';
import './form.scss'


class Form extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            url:'',
            method:'',
            request: { }
        }
    }
    
    handleMethod = event => {
        const method = event.target.value;
        this.setState({method});
    }
    
    handleUrl = event => {
        let url =event.target.value;
        this.setState({url});
    }
    
    handleSubmit = event => {        
        event.preventDefault();
        
        if(this.state.url && this.state.method){
            let request = {
                url: this.state.url,
                method: this.state.method,
              };
        
              // Clear old settings
              let url = '';
              let method = '';
        
              this.setState({request, url, method});
              event.target.reset();

        } else{
            alert('Missing information');
        }
    }

  render() {
    return (
        <> 
        <form onSubmit = {this.handleSubmit}>
            <label className='url'> URL</label>
            <input type='text' onChange= {this.handleUrl} id='url'/>
            <button type='submit'>GO!</button>
            
            <label for='get'>GET</label>
            <input type='radio' name='rest' id='get' onClick={this.handleMethod} value='GET' />

            <label for='post'>POST</label>
            <input type='radio' name='rest' id='post' onClick={this.handleMethod}  value='POST' />

            <label for='put'>PUT</label>
            <input type='radio' name='rest' id='put' onClick={this.handleMethod}  value='PUT' />

            <label for='delete'>DELETE</label>
            <input type='radio' name='rest' id='delete' onClick={this.handleMethod}  value='DELETE' />
        </form>
        
        <section id="result">
          <span className="method">{this.state.request.method}</span>
          <span className="url">{this.state.request.url}</span>
        </section>
        </>
        
    )
  }
}

export default Form;