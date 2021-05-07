import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileDetector } from 'selenium-webdriver';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public inicioForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

  }
  ngOnInit(): void {
    this.inicioForm = this.fb.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
    let datos: any = JSON.parse(localStorage.getItem('info'));
    debugger
    if (datos.tipo == 'usuario') {
      this.router.navigate(['usuario']);
    }
    else {
      this.router.navigate(['admin']);
    }
  }

  onSave(): void {
    let nombre = this.inicioForm.get('nombre').value;
    let contrasena = this.inicioForm.get('contrasena').value;


    if (nombre == 'usuario1' && contrasena == 123) {
      localStorage.setItem('info', JSON.stringify({ nombre: 'usuario1', tipo: 'usuario' }));
      this.router.navigate(['usuario']);

    } else if (nombre == 'usuario2' && contrasena == 123) {
      localStorage.setItem('info', JSON.stringify({ nombre: 'usuario2', tipo: 'admin' }));
      this.router.navigate(['admin']);
    }

    console.log(this.inicioForm);
    if (this.inicioForm.valid) {
      console.log(this.inicioForm.value)
    } else {
      console.log('not valid')
    }
  }


  isValidField(field: string): string {
    const validatedField = this.inicioForm.get(field);
    if (validatedField !== null && validatedField !== undefined) {
      return (!validatedField.valid && validatedField.touched)
        ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
    } else {
      return '';
    }
  }
}


