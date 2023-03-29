import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PaginaAtualizarComponent } from './pagina-atualizar/pagina-atualizar.component';
import { PaginaCriarComponent } from './pagina-criar/pagina-criar.component';
import { ListagemComponent } from './listagem/listagem.component';

import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InformacoesComponent } from './informacoes/informacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PaginaAtualizarComponent,
    PaginaCriarComponent,
    ListagemComponent,
    InformacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
