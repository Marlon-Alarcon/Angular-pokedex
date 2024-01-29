import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-foto_pokemon',
  templateUrl: './foto_pokemon.component.html',
  styleUrls: ['./foto_pokemon.component.css']
})
export class Foto_pokemonComponent implements OnInit {

  @Input() pokemon? :Pokemon

  constructor() { }

  ngOnInit() {
  }

}
