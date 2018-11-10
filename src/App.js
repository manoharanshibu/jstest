import React, { Component } from 'react';
import './App.css';
import fib from './js/Fibanocci.js';
import { es6_sort, bubble_sort } from './js/Sorting';
import base_converted from './js/BaseValConvert';

class App extends Component {
  render() {
    return (
      <div>
          <h1> 1. Fibanocci Series </ h1>
          <div className="App"><br/><br/>{fib(100)}<br/> Please expect precision issues for long numbers
          </div>

          <h1> 2. Associative arrays </ h1>
          <div className="App"><br/><br/>
          Assets/Test2.txt
          </div>

          <h1> 3. Sorting & Merging - Either Sorted / Unsorted array - Use any one sort method</ h1>
          <div className="App"><br/><br/>ES6 sorting - {es6_sort().toString()}</div>
          <div className="App"><br/><br/>Bubble sorting - {bubble_sort().toString()}</div>

          <h1> 4. Base Value Conversion </ h1>
          <div className="App"><br/>{base_converted(102392048230, 10, 15)}</div>
          </div>
    );
  }
}

export default App;
