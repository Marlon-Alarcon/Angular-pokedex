import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from './../../interfaces/pokemon';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-detalle_pokemon',
  templateUrl: './detalle_pokemon.component.html',
  styleUrls: ['./detalle_pokemon.component.css']
})
export class Detalle_pokemonComponent implements OnInit {

  constructor(private pokemonservice : PokemonService) { }

  ngOnInit() {
  }

  @Input() pokemon?: Pokemon;
  @Input() abierto:boolean = false;
  @Output() clicked = new EventEmitter();

  

  descripcion : string = ''

  ngOnChanges(){
      this.informacioncargada();
  }

  informacioncargada(){
    if(this.pokemon?.id){

      console.log(this.pokemon?.id)
      this.pokemonservice.getDescripcion(this.pokemon?.id).subscribe((data) => {
        // console.log("La data amigo",data)
        let texto = data.flavor_text_entries.find((texto:any) =>  texto.language.name === "es")
        // console.log(texto)
        this.descripcion = texto.flavor_text
        console.log(this.descripcion)
        
      })
    }

  }

  getAlturaDelPokemon(): number {
    return this.pokemon?.height || 0;
  }

  getPesoDelPokemon(): number {
    return this.pokemon?.weight || 0;
  }

}
