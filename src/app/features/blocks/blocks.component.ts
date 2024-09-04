import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.scss'
})
export class BlocksComponent implements OnInit {
  // TODO: Move data to another file
  blocksData = [
    {
      block: 'Daniel Fernández Alonso',
      members: [{ name: 'Daniel Fernández Alonso', email: 'danielfernandezalonso@gmail.com' }]
    },
    {
      block: 'Miguel Ángel Pena Ferrer',
      members: [{ name: 'Miguel Ángel Pena Ferrer', email: 'juanodecinca@gmail.com' }]
    },
    {
      block: 'Bloque Cabra (Córdoba)',
      members: [
        { name: 'María de la Concepción Márquez Gómez', email: 'natureandtranslation@gmail.com' },
        { name: 'Emily Noemí Morandeira Vázquez', email: 'natureandtranslation@gmail.com' },
        { name: 'Ivan Parrillo Hidalgo', email: 'natureandtranslation@gmail.com' }
      ]
    },
    {
      block: 'Rubén Chamizo Guerrero',
      members: [{ name: 'Rubén Chamizo Guerrero', email: 'rubenchamizo94@gmail.com' }]
    },
    {
      block: 'David Villalba Collado',
      members: [{ name: 'David Villalba Collado', email: 'pajaropicaflores@gmail.com' }]
    },
    {
      block: 'Bloque sierra del cura',
      members: [
        { name: 'Santiago Conesa', email: 'santiago_conesa@hotmail.com' },
        { name: 'Francisco Almansa', email: 'santiago_conesa@hotmail.com' }
      ]
    },
    {
      block: 'Bloque calasparra',
      members: [
        { name: 'Santiago Conesa', email: '' },
        { name: 'Bartolo López', email: '' }
      ]
    },
    {
      block: 'Bloque Puertos de Beceite',
      members: [{ name: 'Marcel Barceló Blanch', email: 'marci4.mb@gmail.com' }]
    },
    {
      block: 'bloque Cuéllar- Segovia',
      members: [{ name: 'Ezequiel Antorán Pilar', email: 'eze.cuellar@gmail.com' }]
    },
    {
      block: 'Zarza Capilla - Peñalsordo',
      members: [
        { name: 'Julián Cendrero Ramos', email: 'julian@sezextremadura.org' },
        { name: 'Juan José Benítez Ruiz Moyano', email: 'jjbenitezrm@gmail.com' }
      ]
    },
    {
      block: 'Marcos Mallo Leira',
      members: [
        { name: 'Marcos Mallo Leira', email: 'marcosmallo@gmail.com' },
        { name: 'Carmen Díez Rivera', email: '' },
        { name: 'Sahara Ugatz Mallo Díez', email: '' }
      ]
    },
    {
      block: 'Sierra Valdellosa ( Teruel )',
      members: [
        { name: 'Antonio Torrijo Pardos', email: 'antorrijo@yahoo.es' },
        { name: 'José Miguel Pueyo Soler', email: '' },
        { name: 'Luis Miguel Bautista Sopelana', email: '' },
        { name: 'Tomas Jordan Gargallo', email: '' }
      ]
    },
    {
      block: 'Coll de Bracons (Barcelona)',
      members: [
        { name: 'Xavier Arumí Rota', email: '' },
        { name: 'Alfred Encuentra Martínez', email: '' },
        { name: 'Blanca Monteis Coromina', email: '' },
        { name: 'Marc Rota Collell', email: '' },
        { name: 'Eric Serratosa Nuño', email: '' },
        { name: 'Ferran Sayol Altarriba', email: '' },
        { name: 'Marc Vilella Antonell', email: '' }
      ]
    },
    {
      block: 'Bloque cuenca del Foix (Barcelona)',
      members: [
        { name: 'Oriol Millan Blanch (ARBA Litoral)', email: 'arbasistemalitoral@gmail.com' }
      ]
    },
    {
      block: 'Bloques de Sierra Mágina y de Giribaile-Guadalén (Jaén)',
      members: [
        { name: 'Antonio García Reyes', email: 'antoncanena@gmail.com' },
        { name: 'Francisco Herrera García', email: 'antoncanena@gmail.com' },
        { name: 'Raquel Vivar González', email: 'antoncanena@gmail.com' }
      ]
    },
    {
      block: 'Alcarria de Madrid, Nuevo Baztán (Madrid)',
      members: [
        { name: 'Javier Gutiérrez Huete', email: '' },
        { name: 'Helena García Bayón', email: '' },
        { name: 'Eduardo Romero Fernandez', email: '' },
        { name: 'Antonia Rodríguez Caballero', email: '' },
        { name: 'Iván Salgado García', email: '' },
        { name: 'Cristóbal Jurado Ales', email: '' }
      ],
      coordinador: 'Paco Bustamante Collado',
      email: 'nonipaco@hotmail.com'
    },
    {
      block: 'Bloque Herrera del Duque',
      members: [{ name: 'David Cueco Pablo', email: '' }]
    },
    {
      block: 'Bloque Campo de Calatrava, Ciudad Real',
      members: [{ name: 'Raquel Vivar González', email: 'raquelvivar1b@gmail.com' }]
    },
    {
      block: 'Bloque Parque Regional del Sureste (Madrid)',
      members: [
        { name: 'Loreto García Román', email: 'loreto.garcia@ext.madrid.org' },
        { name: 'Felipe Peñalosa García', email: '' },
        { name: 'Félix Martínez Olivas', email: '' }
      ]
    }
  ];
  // TODO: fix this
  blocksDataFiltered = this.blocksData;

  searchInputText: string = '';

  ngOnInit(): void {
    this.blocksDataFiltered = this.blocksData;
  }

  searchBlocks() {
    if (this.searchInputText) {
      this.blocksDataFiltered = this.blocksData.filter((block) => {
        return block.block.includes(this.searchInputText);
      });
    } else {
      this.blocksDataFiltered = this.blocksData;
    }
  }
}
