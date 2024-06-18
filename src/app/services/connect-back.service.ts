
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../shared/classes/player';
import { Race } from '../shared/classes/race';
import { Team } from '../shared/classes/team';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectBackService {

  constructor(private _httpClient: HttpClient) {}

  getAllPlayers() : Observable<Player[]> {
    return this._httpClient.get<Player[]>('http://localhost:8080/api/v1/player/all');
  }

  getAllRaces() : Observable<Race> {
    return this._httpClient.get<Race>('http://localhost:8080/api/v1/race');
  }

getAllTeams() : Observable<Team> {
    return this._httpClient.get<Team>('http://localhost:8080/api/v1/team');
  }

}
