import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { IndexComponent } from './_page/index/index.component';
import { PageAComponent } from './_page/page-a/page-a.component';
import { PageBComponent } from './_page/page-b/page-b.component';
import { LoginComponent } from './_page/login/login.component';
const routes: Routes = [
  {
    path: '', //<--注意自己建立會寫錯成：'/'而導致顯示不出來，正確的是：''．
    component: IndexComponent,
    canActivate: [AuthGuard], 
    children: [
      { path: 'page1', component: PageAComponent },
      { path: 'page2', component: PageBComponent }
    ]
  }, {
    path: 'login', component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })], // <-- debugging purposes only (路由紀錄)
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
