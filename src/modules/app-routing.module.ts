import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAreaComponent } from 'src/app/components/create-area/create-area.component';
import { CreatePowerPlantComponent } from 'src/app/components/create-power-plant/create-power-plant.component';
import { ListAreaComponent } from 'src/app/components/list-area/list-area.component';
import { ListPowerPlantComponent } from 'src/app/components/list-power-plant/list-power-plant.component';
import { CreateEquipmentComponent } from '../app/components/create-equipment/create-equipment.component';

const routes: Routes = [
  { path: 'create-area', component: CreateAreaComponent },
  { path: 'list-areas', component: ListAreaComponent },
  { path: 'create-power-plant', component: CreatePowerPlantComponent },
  { path: 'list-power-plant', component: ListPowerPlantComponent },
  { path: 'create-equipment', component: CreateEquipmentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
