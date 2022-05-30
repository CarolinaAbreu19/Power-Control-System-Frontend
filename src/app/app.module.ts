import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateAreaComponent } from './components/create-area/create-area.component';
import { ListAreaComponent } from './components/list-area/list-area.component';
import { AppRoutingModule } from '../modules/app-routing.module';
import { CreatePowerPlantComponent } from './components/create-power-plant/create-power-plant.component';
import { ListPowerPlantComponent } from './components/list-power-plant/list-power-plant.component';
import { FormsModule } from '@angular/forms';
import { UpdatePowerPlantComponent } from './components/update-power-plant/update-power-plant.component';
import { CreateEquipmentComponent } from './components/create-equipment/create-equipment.component';
import { ListEquipmentComponent } from './components/list-equipment/list-equipment.component';
import { UpdateEquipmentComponent } from './components/update-equipment/update-equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAreaComponent,
    ListAreaComponent,
    CreatePowerPlantComponent,
    ListPowerPlantComponent,
    UpdatePowerPlantComponent,
    CreateEquipmentComponent,
    ListEquipmentComponent,
    UpdateEquipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
