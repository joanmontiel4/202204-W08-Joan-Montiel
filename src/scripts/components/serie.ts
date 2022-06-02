import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { iSerie } from '../interfaces/iseries.js';
import { Stars } from './stars.js';

export class Serie extends Component implements iComponent {
    template: string;
    constructor(
        public selector: string,
        public serie: iSerie,
        public renderSeries: Function
    ) {
        super();
        this.template = this.createTemplate();
        this.render(this.selector);
        this.generateStar();
    }
    createTemplate() {
        let htmlSerieCard = '';
        htmlSerieCard += `
                    <img
                        class="serie__poster"
                        src="${this.serie.poster}"
                        alt="${this.serie.name} poster"
                    />
                    <h4 class="serie__title">${this.serie.name}</h4>
                    <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
                    <ul class="score serie-${this.serie.id}" data-id="${this.serie.id}">
                    </ul>
                    <slot class="delete-button-serie-${this.serie.id}"></slot>
                `;
        return htmlSerieCard;
    }
    generateStar() {
        new Stars(
            `.score.serie-${this.serie.id}`,
            this.serie,
            this.renderSeries.bind(this)
        );
    }
}
