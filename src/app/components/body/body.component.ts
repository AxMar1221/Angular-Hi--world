import { Component } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;

    frase: any = {

        mensaje: "no digas mamades Mery Jean",
        autor: "Peter Parker",

    };

    personajes: string[] = ['Bart', 'Lisa', 'Homero']

}