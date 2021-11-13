import { Container, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {

    fetch('https://valorant-api.com/v1/agents')
      .then(response => response.json())
      .then(data => setData(data));
      
  },[]);


  return (
    <Container >
      {
        data != null ?  
          data.data.map(data => {
            return (
              <Card key={data.uuid}>
                <CardMedia component="img" src={data.bustPortrait} />
                <CardContent>
                  <Typography variant="h5" component="div">{data.displayName}</Typography>
                  <Typography variant="body2" color="text.secondary">{ data.description }</Typography>
                </CardContent>
              </Card>
            )
          })
        : console.warn("empty!")
      }
    </Container>
  );
}

export default App;
