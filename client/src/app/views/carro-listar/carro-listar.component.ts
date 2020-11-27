import { Component, OnInit } from '@angular/core';
import { CarroService } from './../../service/carro.service'
import { Carro } from "./../../models/Carro"
import { Router, ActivatedRoute } from '@angular/router'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-carro-listar',
  templateUrl: './carro-listar.component.html',
  styleUrls: ['./carro-listar.component.css']
})
export class CarroListarComponent implements OnInit {
  carroColumns: string[]=["id"]

  carros: Carro[] = [];
  
  carroTable: MatTableDataSource<Carro> = new MatTableDataSource<Carro>(this.carros)

  constructor(private router: Router, private service: CarroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.list().subscribe((list) => {
      this.carros = list;
      this.carroTable = new MatTableDataSource<Carro>(this.carros)
    })
  }

}
