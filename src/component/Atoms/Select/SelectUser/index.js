import React from 'react'
import './Select.css'

class Select extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }
    
    render() {
      return (
          <div className='input-wrapper'>
            <select className='input' onChange={ (e) => this.setState({value: e.target.value}) }>
              { 
                this.props.data.map((key, i) => {
                  return <option key={i} value={key.id}>{key.isi}</option>
                })
              }
            </select>
          </div>
      );
    }
  }

export default Select