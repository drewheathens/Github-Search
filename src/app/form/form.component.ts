import { Component, OnInit } from '@angular/core';
import { HttpService } from '../repository/http.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profile: any[];
  repository: any[];
  username: string;

  constructor(private httpService: HttpService) { }

  findProfile() {
    this.httpService.updateProfile(this.username);
    this.httpService.getProfileRepos().subscribe(repository => {
      console.log(repository);
      this.repository = repository;
    })



  }

  ngOnInit() {
  }

}
