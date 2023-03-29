import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comprador } from '../Comprador';
import { CompradorService } from '../services/comprador.service';
@Component({
  selector: 'app-pagina-atualizar',
  templateUrl: './pagina-atualizar.component.html',
  styleUrls: ['./pagina-atualizar.component.css']
})
export class PaginaAtualizarComponent {
  comprador!: Comprador;
  btnText="Editar";

  constructor(
    private compradorService: CompradorService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.compradorService.getComprador(id).subscribe((item) => {
      this.comprador = item.data;
    });
  }
  async editHandler(compradorData: Comprador){
    const id=this.comprador.id
    const formData = new FormData()

    formData.append('nome', compradorData.nome)
    formData.append('produto', compradorData.produto)
    formData.append('vendedor', compradorData.vendedor)

    await this.compradorService.updateComprador(id!, formData).subscribe()
    this.router.navigate(['/']);
  }
  voltar(){
    this.router.navigate(['/compradores/'+this.comprador.id]);
  }
}
