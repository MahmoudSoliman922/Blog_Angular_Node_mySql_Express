/*
* Importing the required packages to be used as well as the CrudRequests Service to
*Order to perform CRUD operations.
*/
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {CreatepostComponent} from '../createpost/createpost.component';
import { CrudRequestsService } from '../crud-requests.service';
// Adding CrudRequestsService and CreatepostComponent to the providers
@Component({
  selector: 'app-globalposts',
  templateUrl: './globalposts.component.html',
  styleUrls: ['./globalposts.component.css'],
  providers: [CrudRequestsService , CreatepostComponent]
})
export class GlobalpostsComponent implements OnInit {
// Storing the subscribed data in this variable, It was made for testing and don't affect the function by any means
    contents ;

    constructor(private http: Http, public globalPostsActions: CrudRequestsService , public postsMan: CreatepostComponent) { }
/*
* Checks if the user is logged or not, If yes then will perform the select all action,
* It's a kind of a recursion and the condition is the user to log in
*/
    postGlobalposts() {
        if (CrudRequestsService.islogged === true) {
            this.globalPostsActions.selectAllPosts()
            .subscribe(data => this.contents = data );
        }else {
            setTimeout(() => {
                this.postGlobalposts();
            }, 1000);
        }
    }
// This will send a call to the createpost to make a share with the parentID
// equals to the userID of this post, sending postParentId, postImageUrl and postTxt
    sharePost(postParentId, postImgUrl , postTxt) {
        this.postsMan.sharePost(postParentId, postImgUrl , postTxt);
    }
    ngOnInit() {
// Fires when the class is initialized and starts the recursion.
        this.postGlobalposts();
  }

}
