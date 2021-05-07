import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  public users: { name: string, title: string }[];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.users = [
      { name: 'Carla Espinosa', title: 'Nurse' },
      { name: 'Bob Kenglso', title: 'Doctor of Medicine' },
      { name: 'Janitor', title: 'Janitor' },
      { name: 'Perry Cox', title: 'Doctor of Medicine' },
      { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
    ];
    let datos :any=JSON.parse( localStorage.getItem('info'));
    debugger
    if(datos.tipo == 'usuario'){
    this.router.navigate(['usuario']);}
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/inicio']);  }

}
