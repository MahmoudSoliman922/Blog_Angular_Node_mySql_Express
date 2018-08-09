/*
* Importing the required packages to be used as well as the CrudRequests Service to
*Order to perform CRUD operations as well as CreatepostComponent to edit the users posts.
*/
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {CreatepostComponent} from '../createpost/createpost.component';
import { CrudRequestsService } from '../crud-requests.service';
// Adding CrudRequestsService and CreatepostComponent to the providers
@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css'],
  providers: [CrudRequestsService , CreatepostComponent]
})
export class MypostsComponent implements OnInit {
// Same goes here, contents was just for the testing purpose.
contents ;

    constructor(private http: Http, public myPostsActions: CrudRequestsService , public postsMan: CreatepostComponent ) { }
/* Checks if the user is logged then makes a call to select the posts that this user
* has posted earlier and keeps in recursive mode till the user loges in.
*/
    postMyposts() {
        if (CrudRequestsService.islogged === true) {
            this.myPostsActions.selectPost({ Uid : CrudRequestsService.userData.id })
            .subscribe(data => this.contents = data );
        }else {
            setTimeout(() => {
                this.postMyposts();
            }, 1000);
        }
    }
// This function is to make a call to edit a post that the user has posted before, sending postId, posttxt and imgUrl
    editPost(postId,postTxt , postImgUrl) {
        this.postsMan.editPost(postId,postTxt , postImgUrl);
    }
// This one makes a call to deletes a post, sending the postId
    deletePost(postId) {
        this.myPostsActions.deletePost({id: postId}).subscribe(
            data => {
                if (data.affectedRows === 1) {
                    alert('Post is deleted successfully!');
                }else{
                    alert('Couldn\'t delete the post, try again later!');
                }
            }
        );
    }

  ngOnInit() {
  // It is called on initialization to make sure to capture the data once the user is logged.
      this.postMyposts();
  }

}
