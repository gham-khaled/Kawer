import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FieldsComponent} from "./fields/fields.component";
import {ListFieldsComponent} from "./fields/list-fields/list-fields.component";
import {FieldDetailComponent} from "./fields/field-detail/field-detail.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'fields',
    component: FieldsComponent,
    children: [
      {path: '', component: ListFieldsComponent},
      {
        path: ':id',
        component: FieldDetailComponent,
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
