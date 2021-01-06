import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	buscarporNombre = '';
	buscarporApariecia = '';

	constructor(public hs:HeroesService) {
		console.log('HeroComponent');
	}

	ngOnInit(): void {
	}

}
