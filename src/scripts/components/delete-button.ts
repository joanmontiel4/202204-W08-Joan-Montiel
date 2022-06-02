import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { iSerie } from '../interfaces/iseries.js';

export class DeleteButton extends Component implements iComponent {
    template: string;
    constructor(
        public selector: string,
        public serie: iSerie,
        public deleteSerie: Function
    ) {
        super();
        this.template = this.createTemplate();
        this.outRender(this.selector);
        this.addListener();
    }
    createTemplate() {
        return `
            <i class="fas fa-times-circle icon--delete serie-${this.serie.id}"></i>
        `;
    }
    addListener() {
        const button = document.querySelector(
            `.icon--delete.serie-${this.serie.id}`
        );
        console.dir(button);

        (<HTMLElement>button).addEventListener('click', () => {
            console.log('click delete');
            this.handlerDeleteButton(this.serie.id);
        });
    }
    handlerDeleteButton(id: number) {
        this.deleteSerie(id);
    }
}
