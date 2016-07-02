import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, ADDED_TODO, DELETED_TODO } from '../../helpers/constants/types';
import { normalize } from 'normalizr';
import * as api from './apiTodo';
import * as schema from './todoSchema';
// import { getIsFetching } from '../reducers';

// export const deleteTodo = (todoID) => {
//   return dispatch => {
//     axios.delete(`${apiUrl}/todos/deleteTodo/${todoID}`)
//     .then(response => {
//       dispatch({
//         type: DELETED_TODO,
//         payload: response.data,
//       })
//     })
//     .catch(response => {
//       console.log('deleteTodo ERROR - RESPONSE:', response);
//     });
//   };
// };

export const getTodos = (coupleID) => 
  dispatch => {
    dispatch({ type: FETCH_TODOS_REQUEST })
    api.fetchTodos()
    .then(response =>
      dispatch({
        type: FETCH_TODOS_SUCCESS,
        payload: normalize(response.data, schema.arrayOfTodos),
      }))
      .catch(err => 
        dispatch({
          type: FETCH_TODOS_FAILURE,
          payload: err || "something went wrong",
        }));
    
  }

  // return dispatch => {
  //   axios.get(`${apiUrl}/todos/${coupleID}`)
  //   .then(response => {
  //     dispatch({
  //       type: FETCH_TODOS,
  //       payload: response.data.data,
  //     })
  //   })
  //   .catch(response => {
  //   });
  // };

// export const postTodo = (newTodo) => {
//   return dispatch => {
//     axios.post(`${apiUrl}/todos/addTodo`, newTodo)
//     .then(response => {
//       dispatch({
//         type: ADDED_TODO,
//         payload: response.data,
//       })
//     })
//     .catch(response => {
//     });
//   };
// };
