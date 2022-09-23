import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0Z0Q9q2Y2QYQ2Y2Q2Y2Q/books',
  headers: {
    'Content-type': 'application/json',
  },
});
