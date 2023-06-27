import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Deva',
    modelo: 'modelo2'
  }

  criarPensamento(){
    alert("Novo pensamento criado!")
  }

  cancelarPensamento(){
    alert("Cancelou!")
  }
}