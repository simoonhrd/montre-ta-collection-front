import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Importez l'instance Axios configurée
import { Watch } from './Models/Watch';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const WatchList: React.FC = () => {
    const [watches, setWatches] = useState<Watch[]>([]);
  
    useEffect(() => {
      axios.get('/Watch')
        .then(response => {
          console.log(response.data);
          setWatches(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des montres : ', error);
        });
    }, []);
  
    return (
        <div>
          <header>Montre ta Collection</header>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap' }}>
            {watches.map(watch => (
              <li key={watch.watchId} style={{ margin: '10px' }}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={watch.imageUrl} alt={`Card image ${watch.watchId}`} />
                  <Card.Body>
                    <Button variant="primary">{watch.title}</Button>
                  </Card.Body>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      );
    };

  export default WatchList;