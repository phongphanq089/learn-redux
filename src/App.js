import { Box, Container } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Header from './components/header';
import PageEdit from './components/PageEdit';

function App() {
  const [isEdit, setIsedit] = useState(false)
  const handleClick = () => {
    setIsedit(!isEdit)
  }
  return (
    <Container >
      <Box className="App">
        {isEdit ? <PageEdit handleClick={handleClick} /> : <Header handleClick={handleClick} />}
      </Box>
    </Container>
  );
}

export default App;
