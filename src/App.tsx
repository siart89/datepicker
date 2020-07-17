import React from 'react';
import DatePicker from './components/DatePicker';


function App() {
  return (
    <div className="App">
      <DatePicker date={new Date()}/>
    </div>
  );
}

export default App;
