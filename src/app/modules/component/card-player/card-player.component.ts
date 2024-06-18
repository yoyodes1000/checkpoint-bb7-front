import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../../shared/classes/player';
import { ConnectBackService } from '../../../services/connect-back.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.scss'
})
export class CardPlayerComponent implements OnInit {

  allPlayers$!: Observable<Player[]>;

  constructor(private connectBackService: ConnectBackService) {
  }

  ngOnInit() {
    this.allPlayers$ = this.connectBackService.getAllPlayers();
  }
}
