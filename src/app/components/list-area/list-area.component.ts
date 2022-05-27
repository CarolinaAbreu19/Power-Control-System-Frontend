import { Component, OnInit } from '@angular/core';
import { EletricalArea } from '../../../models/eletricalArea.model';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.css']
})
export class ListAreaComponent implements OnInit {

  public eletricalAreas: EletricalArea[] = [
    {id: 1, code: "0001", name: "Teste1"},
    {id: 2, code: "0002", name: "Teste2"},
    {id: 3, code: "0003", name: "Teste3"},
    {id: 4, code: "0004", name: "Teste4"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
