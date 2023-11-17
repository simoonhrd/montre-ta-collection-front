import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Utilisez la variable d'environnement pour la base URL de l'API
  timeout: 10000, // Limite de temps pour les requêtes en millisecondes
 headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;