import { Component } from '@angular/core';
import { Comprador } from '../Comprador';
import { CompradorService } from '../services/comprador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-criar',
  templateUrl: './pagina-criar.component.html',
  styleUrls: ['./pagina-criar.component.css']
})
export class PaginaCriarComponent {
  btnText="Criar";

  constructor(
    private compradorService: CompradorService,
    private router: Router
    ){}
  async createHandler(comprador: Comprador){
    const formData = new FormData()

    formData.append("nome", comprador.nome)
    formData.append("produto", comprador.produto)
    formData.append("vendedor", comprador.vendedor)

    await this.compradorService.createComprador(formData).subscribe();

    this.voltar();
  }
  voltar(){
    this.router.navigate(['/']);
  }
}