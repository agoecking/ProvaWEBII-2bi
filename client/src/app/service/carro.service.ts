import { Carro } from "./../models/Carro";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root",
})

export class CarroService {
    baseUrl = "http://localhost:1234/carro";

    constructor(private http: HttpClient){}

    list(): Observable<Carro[]>{
        return this.http.get<Carro[]>(this.baseUrl + '/listar')
    }

    create(carro: Carro): Observable<Carro>{
        return this.http.post<Carro>(this.baseUrl+"/cadastrar", carro)
    }

    getPlaca(placa: string): Observable<Carro>{
        return this.http.get<Carro>(`${this.baseUrl}`+`/${placa}`)
    }

    getById(id: string): Observable<Carro>{
        return this.http.get<Carro>(`${this.baseUrl}`+`/${id}`)
    }
}