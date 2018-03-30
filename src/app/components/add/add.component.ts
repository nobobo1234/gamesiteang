import { Component, OnInit, ViewChild } from '@angular/core';
import {GamesService} from "../../services/games.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild('alert') alert;
  message: string;

  constructor(private gamesService: GamesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onChange(select) {

  }

  submitForm(event) {
    const selectvalue = event.target.elements.option.value;
    const name = event.target.elements.name ? event.target.elements.name.value : undefined;
    const url = event.target.elements.url ? event.target.elements.url.value : undefined;
    const password = event.target.elements.password.value;

    switch(selectvalue) {
      case 'create':
        this.gamesService.saveGame({ name, url, password }).subscribe(res => {
          this.message = res;
          this.alert.nativeElement.classList.remove('d-none');
          setTimeout(() => {
            this.alert.nativeElement.classList.add('d-none');
            this.message = "";
          }, 5000);
        });
        break;
      case 'delete':
        this.gamesService.delGame({ name, password }).subscribe(res => {
          this.message = res;
          this.alert.nativeElement.classList.remove('d-none');
          setTimeout(() => {
            this.alert.nativeElement.classList.add('d-none');
            this.message = "";
          }, 5000);
        });
        break;
      default:
        break;
    }
  }

}
