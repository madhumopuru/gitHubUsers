import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';
import { NgHttpLoaderModule } from 'ng-http-loader';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [  
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    NgHttpLoaderModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
