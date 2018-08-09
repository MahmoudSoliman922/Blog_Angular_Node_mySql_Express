/*
* Importing the required packages to be used as well as the CrudRequests Service to
*Order to perform CRUD operations.
*/
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CrudRequestsService } from '../crud-requests.service';
// Adding CrudRequestsService to the providers
@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css'],
  providers: [CrudRequestsService]
})

export class CreatepostComponent implements OnInit {
/**
* Creating boolean objects to switch between creating, editing and sharing functionality
* Also creating postData to hold the required information for the post that will be created
*/
    public static creating = true;
    public static editing = false;
    public static sharing = false;
    public static postData = {
        id: null,
        parentId: null,
        txt : null,
        imgUrl: null
    };
// Creating references for this class to be accessed from the html and another reference for the CrudRequestsService
    public thisClass= CreatepostComponent;
    public classReference = CrudRequestsService;
    constructor(private http: Http , public postActions: CrudRequestsService) { }
// Creating new Posts, Sending the userId, parentId, content and imgUrl
  createPost() {
      this.postActions.createPost({ userId : this.classReference.userData.id , parentId: this.classReference.userData.id  , txt: this.thisClass.postData.txt , imgUrl: this.thisClass.postData.imgUrl })
      .subscribe(data => {
          if  (data.affectedRows !== 0) {
              alert('Post has created successfully!');
              this.thisClass.postData.txt = null;
              this.thisClass.postData.imgUrl = null;
          }else {
              alert('Couldn\'t create the post now , Try again later!');
          }
      });
  }
// Editing Posts : in here we only sets the values of the post and switching the view to edit instead of create post
  editPost(postId , postTxt , postImgUrl) {
      this.thisClass.creating = false;
      this.thisClass.editing = true;
      this.thisClass.postData.id = postId;
      this.thisClass.postData.txt = postTxt;
      this.thisClass.postData.imgUrl = postImgUrl;
  }
// That's the function that will order an Update request from the crud-services, sending the postId, imgUrl and the content
  editMyPost() {
      this.postActions.editPost({ txt: this.thisClass.postData.txt , imgUrl: this.thisClass.postData.imgUrl , id: this.thisClass.postData.id})
      .subscribe(data => {
          if  (data.affectedRows !== 0) {
              alert('Post has been edited successfully!');
              this.thisClass.postData.txt = null;
              this.thisClass.postData.imgUrl = null;
              this.thisClass.creating = true;
              this.thisClass.editing = false;
          }else {
              alert('Couldn\'t edit the post now , Try again later!');
          }
      });

  }
// Sharing Posts : Same goes here, in here we only fetch the post data and switch the view to the sharing mode
  sharePost( postParentId, postTxt , postImgUrl) {
      this.thisClass.creating = false;
      this.thisClass.sharing = true;
      this.thisClass.postData.parentId = postParentId;
      this.thisClass.postData.txt = postTxt;
      this.thisClass.postData.imgUrl = postImgUrl;
  }
/* This post performs the order to create a new post with a parentID for the creator
* to distinct between the creator and the one who shared it, sending the imageUrl, content and the parentId
*/
shareMyPost() {
    this.postActions.createPost({ userId : this.classReference.userData.id , parentId: this.thisClass.postData.parentId , txt: this.thisClass.postData.txt , imgUrl: this.thisClass.postData.imgUrl})
    .subscribe(data => {
        if (data.affectedRows !== 0) {
            alert('Post has been shared successfully!');
            this.thisClass.postData.txt = null;
            this.thisClass.postData.imgUrl = null;
        }else {
            alert('Couldn\'t share the post now , Try again later!');
        }
    });

}

  ngOnInit() {

  }

}





