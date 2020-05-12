import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeRoutingModule} from './recipe/recipe-routing.module';

const appRoutes: Routes = [


  {path: '', redirectTo: '/recipes', pathMatch: 'full'}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes), RecipeRoutingModule],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {

}
