import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit(): void {

    let datos:any  = JSON.parse( localStorage.getItem('info'));
    if(datos.tipo == 'admin'){
    this.router.navigate(['admin']);}
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/inicio']);  }
}
