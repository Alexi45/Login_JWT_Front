import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-menu-gestor',
  templateUrl: './menu-gestor.component.html',
  styleUrls: ['./menu-gestor.component.css']
})
export class MenuGestorComponent implements OnInit {

  content?: string;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
  this.userService.getAdminBoard().subscribe(
  data => {
  this.content = data;
  },
  err => {
  this.content = JSON.parse(err.error).message;
  }
  );
  }
  }
