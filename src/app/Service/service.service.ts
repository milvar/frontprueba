import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/backprueba/personas';

  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }

  crearPersonas(persona:Persona){
    return this.http.post<Persona>(this.url,persona);
  }

  getPersonasId(id:number){
    return this.http.get<Persona>(this.url+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.url+"/"+persona.id, persona);
  }

  borrarPersona(persona:Persona){
    return this.http.delete<Persona>(this.url+"/"+persona.id);
  }

}
