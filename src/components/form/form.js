import React from 'react';
import './form.scss'

// const Form = () => {
//     return ( 
//         <form>
//             <label className='url'> URL</label>
//             <input type='text' id='url'/>
//             <button>GO!</button>
            
//             <label for='get'>GET</label>
//             <input type='radio' name='rest' id='get' value='GET' />

//             <label for='post'>POST</label>
//             <input type='radio' name='rest' id='post' value='POST' />

//             <label for='put'>PUT</label>
//             <input type='radio' name='rest' id='put' value='PUT' />

//             <label for='delete'>DELETE</label>
//             <input type='radio' name='rest' id='delete' value='DELETE' />
//         </form>
//     )
// }

class Form extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            url:'url'
        }
    }

    handleClick(event){
        event.preventDefault();
        let rest = document.getElementsByName('rest')
        let url = document.getElementById('url')
        let result = document.getElementById('result')
        
        for( let i =0; i < rest.length; i++){
            if(rest[i].checked){   
                return(             
                    result.innerHTML = <p>{url.value}   {rest[i].value}</p>
                )
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

        </div>
        </>
        
    )
  }
}

export default Form;