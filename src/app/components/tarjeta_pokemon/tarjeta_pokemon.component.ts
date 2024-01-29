import { PokemonService } from './../../services/pokemon.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PokemonI } from 'src/app/interfaces/pokeapi';

@Component({
  selector: 'app-tarjeta_pokemon',
  templateUrl: './tarjeta_pokemon.component.html',
  styleUrls: ['./tarjeta_pokemon.component.css']
})
export class Tarjeta_pokemonComponent implements OnInit, OnChanges {

  numero:string
  fulldata:any = []

  constructor(
    private pokemonService:PokemonService
  ) {
    this.numero = ''
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.extraernumero()
  }
  
  @Input() data?:PokemonI
  @Output() clickeado = new EventEmitter<string>()

  extraernumero(){

    if(this.data){
      this.numero = this.data?.url.substring(34,this.data.url.length-1)
      // console.log(this.numero)
      // this.fulldata = this.pokemonService.getpokemonId(this.numero)
      // console.log(this.fulldata)

      // this.pokemonService.getpokemonId(this.numero).subscribe((data) => {
      //   this.fulldata = data
      //   console.log(this.fulldata)
      // }, error => console.log(error))

    }
    else{
      console.log("No se encuentras datos en el destino")
    }
  }

}
