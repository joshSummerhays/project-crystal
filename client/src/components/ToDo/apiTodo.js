import axios from 'axios';
const apiUrl = 'http://localhost:3000/api/v1';

export const fetchTodos = () => {
  return 
    axios.get(`${apiUrl}/todos/${coupleID}`)
    .then(response => {
      dispatch({
        type: FETCH_TODOS,
        payload: response.data.data,
      })
    })
    .catch(response => {
    });
}




    // axios.post(`${apiUrl}/todos/addTodo`, newTodo)
    // .then(response => {
    //   dispatch({
    //     type: ADDED_TODO,
    //     payload: response.data.data,
    //   })
    // })
    // .catch(response => {
    // });

// axios.delete(`${apiUrl}/todos/deleteTodo/${todoID}`)
// .then(response => {
//   dispatch({
//     type: DELETED_TODO,
//     payload: response.data.data,
//   })
// })
// .catch(response => {
//   console.log('deleteTodo ERROR - RESPONSE:', response);
// });