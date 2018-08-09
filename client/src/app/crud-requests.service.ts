  /**
  * User CRUD Requests :
  * doLog() is for selecting a user based upon their email and password , Authenticate the User and allow him to log-in
  * doReg() is for registering a new user , taking from him Name,Email and password.
  * doEdit() is for Updating the User's data , change the email,password or name.
  * doDelete() is for deleting this account.
  * createPost() is for creating a new post, by recieving and sending the post data
  * editPost()  is for editing a post, by recieving and sending the new post data
  * selectPost() is for selecting posts made by a certain user to be represented later in myposts section
  * selectAllPosts() is for selecting all the posts with no filters
  * deletePost() recieving the post Id and requesting a post request (Should have been a delete request) to delete this post
  */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// importing the rxjs maping function to map the results to the components to be subscribed
import 'rxjs/add/operator/map';

@Injectable()
export class CrudRequestsService {
  // Data of the user in the current session.
  public static userData = {
      id : 0,
      email : '',
      password : '',
      name: ''
 };
  public static islogged;
  constructor(private http: Http) { }

////////////////////////////////////////////////////////////////
///////////          User CRUD requests              //////////
///////////////////////////////////////////////////////////////

// Select and Authenticate request based upon Email and password, sending email and password in the user object
  logUser(user) {
      return this.http.post('http://127.0.0.1:3000/user/select', user)
      .map(res =>  res.json());
  }
// Registering a new user, sending email, name and password in the user object
  regUser(user) {
      return this.http.post('http://127.0.0.1:3000/user/create', user)
      .map(res => res.json()
      );
  }
// Update Request, sending email, name and password in the user object
editUser(user) {
    return this.http.post('http://127.0.0.1:3000/user/update', user)
    .map(res =>  res.json()
    );
}
// Delete Request, sending the  user ID in the user object
deleteUser(user) {
    return this.http.post('http://127.0.0.1:3000/user/delete', user)
    .map(res =>  res.json()
    );
}

////////////////////////////////////////////////////////////////
///////////          Posts CRUD requests              /////////
///////////////////////////////////////////////////////////////

// Create Post, sending the content, imgUrl, userId and parentId in the content object
createPost(content) {
    return this.http.post('http://127.0.0.1:3000/post/create', content)
    .map(res => res.json()
    );
}
// Update Post, sending the content, imgUrl, userId, parentId and postId in the content object
editPost(content) {
    return this.http.post('http://127.0.0.1:3000/post/update', content)
    .map(res => res.json()
    );
}
// Select Post, sending the postId in the content object
public selectPost(content) {
    return this.http.post('http://127.0.0.1:3000/post/select', content)
    .map(res => res.json()
    );
}
// Select all posts, Don't send anything as it's a request to select all the posts in the database
selectAllPosts() {
    return this.http.post('http://127.0.0.1:3000/post/select/all', '')
    .map(res => res.json()
    );
}
// Delete Post, sending the postId in the content object, this one as well should have been a delete request instead of a post one
deletePost(content) {
    return this.http.post('http://127.0.0.1:3000/post/delete' , content)
    .map(res => res.json()
    );
}

}
