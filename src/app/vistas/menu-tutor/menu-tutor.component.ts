import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu-tutor',
  templateUrl: './menu-tutor.component.html',
  styleUrls: ['./menu-tutor.component.css']
})
export class MenuTutorComponent implements OnInit {

  content?: string;
constructor(private userService: UserService) { }
ngOnInit(): void {
this.userService.getModeratorBoard().subscribe(
data => {
this.content = data;
},
err => {
this.content = JSON.parse(err.error).message;
}
);
}
}
