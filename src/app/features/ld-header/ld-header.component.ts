import { Component, OnInit } from '@angular/core';
import { IUser } from './Interfaces/IUser';

@Component({
  selector: 'ld-header',
  templateUrl: './ld-header.component.html',
  styleUrls: ['./ld-header.component.scss']
})
export class LdHeaderComponent implements OnInit {

  user: IUser = {}; //undefined



  ngOnInit(): void {
    this.buildHeader();    
    }
  buildHeader() {
    if(this.checkIfUserIsLogged()){
      this.user.name= localStorage.getItem("userName") || '';
      this.user.role = localStorage.getItem("role") || '';
      //insere nome do usuario no header e role
    }

   
  }
  checkIfUserIsLogged() {
    return localStorage.getItem("userName") !==null && localStorage.getItem("role") !==null;
    
  }

  }


