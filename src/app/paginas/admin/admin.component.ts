import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  public users: { name: string, title: string }[];
  
  constructor() { }

  ngOnInit(): void {
    this.users = [
      { name: 'Carla Espinosa', title: 'Nurse' },
      { name: 'Bob Kenglso', title: 'Doctor of Medicine' },
      { name: 'Janitor', title: 'Janitor' },
      { name: 'Perry Cox', title: 'Doctor of Medicine' },
      { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
    ];
  }

}
