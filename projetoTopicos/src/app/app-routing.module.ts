import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { ListagemComponent } from './listagem/listagem.component';
import { PaginaAtualizarComponent } from './pagina-atualizar/pagina-atualizar.component';
import { PaginaCriarComponent } from './pagina-criar/pagina-criar.component';

const routes: Routes = [
  {path: '', component: ListagemComponent},
  {path: 'compradores/novo', component: PaginaCriarComponent},
  {path: 'compradores/editar/:id', component: PaginaAtualizarComponent},
  {path: 'compradores/:id', component: InformacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
