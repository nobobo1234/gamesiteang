import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Game } from '../../interfaces/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: Game;

  constructor(private gamesService: GamesService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let gameName = this.route.snapshot.params['gamename'];
      this.game = this.gamesService.getGame(gameName);
    });
  }

  get gameurl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.game.url);
  }

}
