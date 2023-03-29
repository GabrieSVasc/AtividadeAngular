import { Component, OnInit } from '@angular/core';
import { CompradorService } from '../services/comprador.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Comprador } from '../Comprador';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent implements OnInit{
  comprador?: Comprador;

  constructor(
    private compradorService: CompradorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.compradorService.getComprador(id).subscribe((item) => {
      this.comprador = item.data;
    })
  }
  async removeHandler(id: number){
    if(id){
      await this.compradorService.removeComprador(id).subscribe();
      this.voltar();
    }
  }
  voltar(){
    this.router.navigate(['/']);
  }
}