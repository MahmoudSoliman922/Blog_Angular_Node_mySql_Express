/*
* Importing the required packages to be used as well as the CrudRequests Service to
*Order to perform CRUD operations.
*/
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CrudRequestsService } from '../crud-requests.service';
// Adding CrudRequestsService to the providers
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CrudRequestsService]
})
export class LoginComponent implements OnInit {
/**
* Creating objects to switch between the registeration, Log-in and to check if the user
* is logged to brings the edit and sign out layout also if the user logged and pressed
* edit my account it gives back the edit account layout.
* And for the user object it holds the user data
*/
  logvisible = true;
  regvisible = false;
  isLogged = false;
  user = {
      id : null,
      name: null,
      email: null,
      password: null
  };
  constructor(private http: Http  , public userActions: CrudRequestsService) { }
/* This function performs a log-in call to the CrudRequestsService and switch the layout
* If the user is logged , also sends the user data to CrudRequestsService to keep it there
* to be used in another calls with another components
*/
  doLog() {
// Sends email and password to the CrudRequestsService
      this.userActions.logUser({email: this.user.email , password: this.user.password})
      .subscribe(data =>{
          if  (data.length !== 0) {
              alert('Logged in Successfully');
              this.user.id = data[0].id;
              this.user.name = data[0].name;
              this.logvisible = false;
              this.regvisible = false;
              this.isLogged = true;
              CrudRequestsService.islogged = this.isLogged;
              CrudRequestsService.userData.id = this.user.id;
              CrudRequestsService.userData.name = this.user.name;
              CrudRequestsService.userData.password = this.user.password;
              CrudRequestsService.userData.email = this.user.email;
          }else {
              alert('Email or Password is incorrect');
          }
      }
    );
// This function switches the layout to the Registration layout.
  }
  goReg() {
      this.logvisible = false;
      this.regvisible = true;
      this.isLogged = false;
  }
/**
* This function takes the user input call the CrudRequestsService to go and check if
* this email exists or not, If yes it notifies the user that he/she needs to register
* with another email, If the user is registered it loges him automatically.
*/
  doReg(){
// Sends email, name and password to the CrudRequestsService
      if (this.user.email !== null && this.user.email !='' && this.user.name !== null && this.user.name !='' && this.user.password !== null && this.user.email !='') {
            this.userActions.regUser({email: this.user.email , password: this.user.password , name: this.user.name})
            .subscribe(data => {
                if  (data.affectedRows !== 0) {
                    alert('Registered Successfully');
                    this.user.id = data.insertId;
                    this.logvisible = false;
                    this.regvisible = false;
                    this.isLogged = true;
                    CrudRequestsService.islogged = this.isLogged;
                    CrudRequestsService.userData.id = this.user.id;
                    CrudRequestsService.userData.name = this.user.name;
                    CrudRequestsService.userData.password = this.user.password;
                    CrudRequestsService.userData.email = this.user.email;
                }else {
                      alert('User Already Exists , try another Email!');
                }
            }
            );
      }else {
          alert('Please Insert all the data!');
      }
  }

// This function switches the layout to the Log-in layout.
  goLog() {
      this.logvisible = true;
      this.regvisible = false;
      this.isLogged = false;
  }
// This function switches the layout to the Edit Account layout.
  goEdit() {
      this.logvisible = false;
      this.regvisible = true;
      this.isLogged = true;
  }
/**
 * This Function checks if the user has entered all the required values, if not otifies him to
 * fill them, Then order an Update request from the crud-services
 */
  doEdit() {
// Sends email, name, userId and password to the CrudRequestsService
      if (this.user.email !== null && this.user.email !='' && this.user.name !== null && this.user.name !='' && this.user.password !== null && this.user.email !='') {
          this.userActions.editUser({email: this.user.email , password: this.user.password , name: this.user.name , id: this.user.id})
          .subscribe(data => { console.log(data);
          if  (data.affectedRows !== 0) {
              alert('Edited Successfully');
              this.logvisible = false;
              this.regvisible = false;
              this.isLogged = true;
              CrudRequestsService.islogged = this.isLogged;
              CrudRequestsService.userData.id = this.user.id;
              CrudRequestsService.userData.name = this.user.name;
              CrudRequestsService.userData.password = this.user.password;
              CrudRequestsService.userData.email = this.user.email;
          }else {
              alert('Couldn\'t make this edit');
          }
          }
        );
      }else {
          alert('Please Insert all the data!');
      }
  }
// This Function Delete the User account.
  doDelete(){
// Sends the userId to the CrudRequestsService
      this.userActions.deleteUser({id: this.user.id})
      .subscribe(data => { console.log(data);
          if  (data.affectedRows !== 0) {
              alert('Deleted Successfully');
              this.logvisible = true;
              this.regvisible = false;
              this.isLogged = false;
              this.user.id = null;
              this.user.name = null;
              this.user.email = null;
              this.user.password = null;
              CrudRequestsService.islogged = this.isLogged;
              CrudRequestsService.userData.id = this.user.id;
              CrudRequestsService.userData.name = this.user.name;
              CrudRequestsService.userData.password = this.user.password;
              CrudRequestsService.userData.email = this.user.email;
          }else {
              alert('Couldn\'t make this delete!');
          }
      }
      );
  }

// This function loges the user out and change the layout to the log-in one.
  goOut() {
      this.logvisible = true;
      this.regvisible = false;
      this.isLogged = false;
      CrudRequestsService.islogged = this.isLogged;
// Delete the Login Session data
      this.user.id = null;
      this.user.name = null;
      this.user.email = null;
      this.user.password = null;
  }
// It changes the layout from the Edit Account to the main home page.
  goHome() {
      this.logvisible = false;
      this.regvisible = false;
      this.isLogged = true;
  }




  ngOnInit() {
  }

}
