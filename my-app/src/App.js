import React, {Component} from 'react';
import calculation from './Calcfunction';
import './App.css';

class App extends Component {
  state = {
    a: '',
    b: '',
    typeOfAction: '',
    result: 0
  }

  inputAChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
        a: event.target.value
    });
  }

  inputBChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
        b: event.target.value
    });
  }

  inputAction = (prop) => {
    this.setState({
      typeOfAction: prop
    });
  }

  Result = () => {
      let res = calculation(this.state.a, this.state.b, this.state.typeOfAction);
      console.log(res);
      this.setState({
        result: res
      });
  }


  render() {
    return(
      <div className='calculator'>
        <h1>Calculator</h1>
        <p>a = </p>
        <input 
          type='number' 
          value={this.state.a}
          onChange={this.inputAChangeHandler} 
        />
        <div className='operations'>
          <button 
            className={`operation ${this.state.typeOfAction === '-' ? 'active' : ''}`} 
            onClick={() => this.inputAction('-')}
          >-</button>
          <button 
            className={`operation ${this.state.typeOfAction === '+' ? 'active' : ''}`} 
            onClick={() => this.inputAction('+')}
          >+</button>
          <button 
            className={`operation ${this.state.typeOfAction === '*' ? 'active' : ''}`} 
            onClick={() => this.inputAction('*')}
          >*</button>
          <button 
            className={`operation ${this.state.typeOfAction === '/' ? 'active' : ''}`} 
            onClick={() => this.inputAction('/')}
          >/</button>
          </div>
        <p>b = </p>
        <input
          type = 'number'
          value = {this.state.b}
          onChange={this.inputBChangeHandler}
        />
        <br />
        <button
          className='btn-equals'
          onClick={ () => (this.Result())}
        >=</button>
        <p className='result'>{this.state.result}</p>
      </div>
    );
  }
  
}

export default App;
