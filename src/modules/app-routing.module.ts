import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAreaComponent } from 'src/app/components/create-area/create-area.component';
import { ListAreaComponent } from 'src/app/components/list-area/list-area.component';

const routes: Routes = [
  { path: 'create-area', component: CreateAreaComponent },
  { path: 'list-areas', component: ListAreaComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
