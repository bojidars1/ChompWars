import React from 'react';
import Layout from './components/Layout';
import { Button } from '@mui/material';

function App() {
    return (
        <Layout>
           <div>
              <h1>Welcome to ChopWars!</h1>
              <Button variant="contained" color="primary">Play Now</Button>
            </div>
        </Layout>
    );
}

export default App;