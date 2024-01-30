import { DatoPokemon } from 'src/app/interfaces/pokeapi';
import { PokemonService } from './../../services/pokemon.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})

export class HomeComponent implements OnInit {

  listaPokemon: any = []
  pagina:number = 1
  cargando:boolean = false
  pokemonSeleccionado: any = []
  detalle:boolean = false

  constructor(
    private pokemonService:PokemonService
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  @ViewChild('tarjetas', { static: true }) tarjetasElement!: ElementRef;

  async cargarLista() {

    this.cargando = true

    this.pokemonService.getpokemon(this.pagina).subscribe(
      (data: DatoPokemon) => {

        if (data && data.results) {
          this.pagina++
          console.log(this.pagina)
          this.listaPokemon = this.listaPokemon.concat(data.results);
          console.log(this.listaPokemon);

          this.cargando = false
          // console.log(this.cargando)
        } else {
          this.cargando = true
          console.error('Sin Estructura');
        }
        
      },
      (error) => console.error(error)
    );
    

    

  }

  onScroll(e:any){
    // console.log(e)
    if(this.cargando){
      console.log("cragando amigo")
    }
    else{
      if(
        Math.round(
          this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
          )
          === e.srcElement.scrollHeight){
          this.cargarLista();
        }
    }

  }

  async seleccionado(id:string){


    console.log(id)
    this.pokemonService.getpokemonId(id).subscribe((data: Pokemon) => {
      this.pokemonSeleccionado = data

      console.log(this.pokemonSeleccionado)
    },(error) => console.log(error))

    if(this.pokemonSeleccionado?.id !== undefined){

      console.log(this.pokemonSeleccionado)
      if(id === this.pokemonSeleccionado?.id.toString()){
        console.log(this.pokemonSeleccionado)
        return this.cambiardetalle()
      }
      
    }


  }

  cambiardetalle(){

    if(this.pokemonSeleccionado){

      this.detalle = !this.detalle

      console.log(this.detalle)

    }

  }
  

}
