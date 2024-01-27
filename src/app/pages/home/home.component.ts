import { DatoPokemon } from 'src/app/interfaces/pokeapi';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})

export class HomeComponent implements OnInit {

  listaPokemon: any = []

  constructor(
    private pokemonService:PokemonService
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista() {
    this.pokemonService.getpokemon().subscribe(
      (data: DatoPokemon) => {

        if (data && data.results) {

          this.listaPokemon = this.listaPokemon.concat(data.results);
          console.log(this.listaPokemon);
        } else {

          console.error('Sin Estructura');
        }
        
      },
      (error) => console.error(error)
    );
  }
  

}
