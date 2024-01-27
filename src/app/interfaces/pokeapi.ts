export interface DatoPokemon {
    count: number;
    next: string;
    previous: string;
    results: PokemonI[];
  }
  
export interface PokemonI {
    name: string;
    url: string;
}
  
