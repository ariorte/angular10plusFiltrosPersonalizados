import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'ordenarNombre'
})
export class OrdenarNombrePipe implements PipeTransform {

	transform(value: any): any {
		return value.sort((x, y) => {
			if (x.name < y.name) {
				return -1;
			}

			if (x.name > y.name) {
				return 1;
			}

			return 0;
		});
	}

}
