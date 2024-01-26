/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Detalle_pokemonComponent } from './detalle_pokemon.component';

describe('Detalle_pokemonComponent', () => {
  let component: Detalle_pokemonComponent;
  let fixture: ComponentFixture<Detalle_pokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detalle_pokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalle_pokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
