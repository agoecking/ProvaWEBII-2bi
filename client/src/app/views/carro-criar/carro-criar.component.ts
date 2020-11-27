import { Component, OnInit } from '@angular/core';
import { Carro } from "src/app/models/Carro"
import { CarroService } from "src/app/service/carro.service"
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-carro-criar',
  templateUrl: "./carro-criar.component.html",
  styleUrls: ['./carro-criar.component.css']
})
export class CarroCriarComponent implements OnInit {

  carro: Carro = new Carro();

  modelo!: string;
  placa!: string;
  ano!: number;
  date!: string;

  constructor(private service: CarroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.service.getById(id).subscribe((carro) => {
        this.loadData(carro);
      });
    }
  }

  create(): void {
    if (this.carro._id == null){
      this.service.create(this.carro).subscribe((carro) => {
        console.log(carro)
      })
    }else{
      console.log("nopers")
    }
    this.router.navigate(["/"])
  }

  getCarro(placa: string): void {
    let placaInput = placa
    this.service.getPlaca(placaInput).subscribe((carro)=>{
      this.loadData(carro);
    })
  }

  loadData(carro: Carro){
    this.carro = carro;
    this.date = carro.createdAt.toString();
  }
}
