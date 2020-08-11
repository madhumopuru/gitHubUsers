import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras, Router } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Spinkit, SpinnerVisibilityService } from 'ng-http-loader';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId
  constructor(private http: HttpClient, private router: Router, private spinner: SpinnerVisibilityService, private activatedRoute: ActivatedRoute,  private location: Location,) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params["userID"];
    });
  }
  UserDetails
  node_id;
  avatar_url;
  gravatar_id;
  url;
  html_url;
  followers_url;
  following_url;
  gists_url;
  starred_url;
  subscriptions_url;
  organizations_url;
  repos_url;
  events_url;
  received_events_url;  
  ngOnInit(): void {
    this.spinner.show();
    this.http.get("https://api.github.com/users/"+this.userId).subscribe((resp: Response) => {
      this.UserDetails = resp;
      this.avatar_url = this.UserDetails.avatar_url

      this.gravatar_id = this.UserDetails.gravatar_id
      this.url = this.UserDetails.url
      this.html_url = this.UserDetails.html_url
      this.followers_url = this.UserDetails.followers_url
      this.following_url = this.UserDetails.following_url
      this.gists_url = this.UserDetails.gists_url
      this.spinner.hide();

      //console.log(this.UserDetails)
    });
  }
  callBack(): void {
    this.location.back();
  }
}
