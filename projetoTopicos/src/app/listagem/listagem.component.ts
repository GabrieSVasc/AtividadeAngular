import { Component, OnInit, Input } from '@angular/core';

import { CompradorService } from '../services/comprador.service';

import { Route, Router } from '@angular/router';

import { Comprador } from '../Comprador';

import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  displayedColumns=['#','nome', 'produto','vendedor', 'actions'];
  compradores: Comprador[] = [];
  baseApiUrl = environment.baseApiUrl;
  

  constructor(
    private compradorService: CompradorService,
    private router: Router
  ){}
  ngOnInit(): void{
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
    this.router.navigate([`/`]).then(()=>{
    })
      })
    this.compradorService.getCompradores().subscribe((items) =>{
      const data = items.data;
      data.map((item) =>{
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });
      this.compradores=items.data;
    })
  }
}
