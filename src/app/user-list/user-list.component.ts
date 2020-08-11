import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import { DataTablesModule } from 'angular-datatables';
import {BrowserModule} from '@angular/platform-browser';
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Rx';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PageEvent} from '@angular/material/paginator';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Spinkit, SpinnerVisibilityService } from 'ng-http-loader';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = [ 'slno', 'login', 'node_id', 'gravatar_id', 'type', 'site_admin'];

  
  ELEMENT_DATA: PeriodicElement[] = [];  
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);


  public loading = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private http: HttpClient, private router: Router,  private spinner: SpinnerVisibilityService) {}

  ngOnInit() {
      //this.dataSource.paginator = this.paginator;
        this.getInititalData();
    }
    getInititalData(){
      this.spinner.show();
      this.http.get('https://api.github.com/users').subscribe((Response:[]) => {
        console.log(Response)
        this.ELEMENT_DATA = Response; 
         //this.ELEMENT_DATA.push(Response as unknown as PeriodicElement);
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator
        this.spinner.hide();
        })
    }


    UserData(id){
      //alert(id)
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "userID": id,
        }
      };    
      this.router.navigate(["/userDetails"], navigationExtras);
  }

  
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
}

export interface PeriodicElement {
  slno: number;
  login: string;
  node_id: string;
  gravatar_id: string;
  type : string;
  site_admin: string;
  id:number
 
}


