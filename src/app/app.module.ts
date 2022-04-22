import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_page/login/login.component';
import { IndexComponent } from './_page/index/index.component';
import { PageAComponent } from './_page/page-a/page-a.component';
import { PageBComponent } from './_page/page-b/page-b.component';
import { HeaderComponent } from './_component/header/header.component';
import { SidebarLeftComponent } from './_component/sidebar-left/sidebar-left.component';
import { FooderComponent } from './_component/fooder/fooder.component';
import { MessageErrComponent } from './_component/message-err/message-err.component';
import { newMailRules } from './_shared/directive/email.directive';

import { PaginationComponent } from './_component/pagination/pagination.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    PageAComponent,
    PageBComponent,
    HeaderComponent,
    SidebarLeftComponent,
    FooderComponent,
    MessageErrComponent,
    newMailRules,PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
