import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: "",
    password: ""
  };
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  login() {

    let data = 'username=' + encodeURIComponent(this.user.username) + '&password=' + encodeURIComponent(this.user.password) + '&token=true'

    this.apiService.post("https://riskcanvas3.financialcrimestechnology.com/cas/v1/tickets", data).subscribe(
      result => {
       console.log(result);
      }
    );;
  }

}
