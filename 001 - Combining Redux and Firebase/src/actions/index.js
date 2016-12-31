import Firebase from 'firebase';
import _ from 'lodash';
import {
  FETCH_POSTS,
  DELETE_POST,
  CREATE_POST
} from './types';


//fetching from the firebase URL/API for this specific app
const Posts = new Firebase('https://fbredux.firebaseio.com/');

export function fetchPosts() {
  return dispatch => {
      //a value event is Firebase's way of saying 'hey, i just receieved some new data over the wire.'
      //SO to incorporate redux in the way it's supposed to be used, we're incorporating each firebase ref/value event into an action creator (like this doc here).
    Posts.on('value', (snapshot) => {
      dispatch({
        type: FETCH_POSTS,
        //snapshot.val is just a JSON representation of whatever data was just loaded by firebase.
        payload: snapshot.val()
      });
    });
  };
}

export function createPost(post) {
    //this 'push' is not the same as JS push...it's pushing into the DB. 
  return dispatch => Posts.push(post);
}

export function deletePost(key) {
    //Posts.child(key) says 'find this particular post'
  return dispatch => Posts.child(key).remove();
  //when .remove() called, automatically get a value event sent across the wire (so we can rerender the posts index page)
}
