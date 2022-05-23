import { Component, OnInit } from '@angular/core';
import { PowerPlant } from 'src/models/powerPlant.model';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.css']
})
export class CreateAreaComponent implements OnInit {

  public powerPlants: PowerPlant[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
