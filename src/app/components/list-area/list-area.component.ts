import { Component, OnInit } from '@angular/core';
import { EletricalArea } from '../../../models/eletricalArea.model';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.css']
})
export class ListAreaComponent implements OnInit {

  public eletricalAreas: EletricalArea[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
