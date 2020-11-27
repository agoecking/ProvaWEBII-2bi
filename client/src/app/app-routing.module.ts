import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarroCriarComponent } from "./views/carro-criar/carro-criar.component"
import {CarroListarComponent} from "./views/carro-listar/carro-listar.component"

const routes: Routes = [
  {
    path: 'carro/cadastrar',
    component: CarroCriarComponent
  },
  {
    path: '', component: CarroListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
