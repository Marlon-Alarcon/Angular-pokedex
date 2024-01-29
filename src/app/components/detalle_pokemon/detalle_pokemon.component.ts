import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from './../../interfaces/pokemon';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  ngOnChanges(): void {
    this.informacioncargada()
    
  }



  informacioncargada(){
    if (this.pokemon) {
      this.pokemonservice.getDescripcion(this.pokemon?.id).then((res) => {
        this.descripcion = res
      });
    }
    
  }

}
