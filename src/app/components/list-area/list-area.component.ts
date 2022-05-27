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

  edit(code: String) {
    // Fazer uma requisição de editar os dados passando o código da área elétrica
    console.log(code);
  }

  delete(code: String) {
    // Fazer uma requisição de excluir os dados passando o código da área elétrica
    console.log(code);
  }

  ngOnInit(): void {
  }

}
