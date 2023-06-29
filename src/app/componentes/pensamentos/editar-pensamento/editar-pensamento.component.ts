import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent {

   @Input() pensamentoTeste: Pensamento = {
    id: 0, 
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

 ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamentoTeste = pensamento
    })
  }

  editarPensamento() {
    this.service.editar(this.pensamentoTeste).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }
  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
