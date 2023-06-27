import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
 
  listaPensamentos = [
    {
      conteudo: 'Estou com fome',
      autoria: 'Bea',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Vela',
      autoria: 'Bea',
      modelo: 'modelo1'
    }
  ];
}
