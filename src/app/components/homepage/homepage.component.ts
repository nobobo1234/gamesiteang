import { GamesService } from '../../services/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  ngOnInit() { }

  applySearch(val: string) {
    console.log(val);
  }

}
