import React from 'react';
import DatePicker from './components/DatePicker';
import styled from 'styled-components';
import Scroller from './Scroller';


function App() {
  const [state, setState] = React.useState(new Date());

  const setNewDate = (date: Date) => {
    setState(date)
  };

  React.useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="App">
      {/* <StyledPicker>
        <DatePicker
          monthShow={2}
          selectedDate={state}
          setNewDate={setNewDate}
        />
      </StyledPicker> */}
      <Scroller />
    </div>
  );
}

const StyledPicker = styled.div`
  width: 722px;
`;


export default App;
