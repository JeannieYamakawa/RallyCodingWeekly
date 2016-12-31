import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

//returning a function. redux Thunk (middleware) sees that it's a function and immediately calls that function with the dispatch method. the request resolves after some time later, and finally calls dispatch with the action (object) inside of the function. 
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: 'FETCH_PROFILES', payload: data })
    });
  };
}
