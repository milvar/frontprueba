import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(persona:Persona){
    this.service.crearPersonas(persona)
    .subscribe(data=>{
      alert("Se creo correctamente. !");
      this.router.navigate(["listar"]);
    })
  }

}
