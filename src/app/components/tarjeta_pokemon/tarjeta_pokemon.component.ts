import { PokemonService } from './../../services/pokemon.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PokemonI } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-tarjeta_pokemon',
  templateUrl: './tarjeta_pokemon.component.html',
  styleUrls: ['./tarjeta_pokemon.component.css']
})
export class Tarjeta_pokemonComponent implements OnInit, OnChanges {

  numero:string
  // fulldata:any = []

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
  @Input() seleccionado?:boolean = false
  @Input() fulldata?:Pokemon
  @Output() clickeado = new EventEmitter<string>()

  extraernumero(){

    if(this.data && this.data.url !== ""){
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
      if(this.fulldata){

        if(this.fulldata?.species?.url){
          this.numero = this.fulldata?.species?.url.substring(42,this.fulldata?.species?.url?.length-1)
          this.data ={
            name: this.fulldata.species.name,
            url:''
          }
        }
        
      }
      else{
        console.log("No se encuentras datos en el destino")
      }
    }
  }

}
