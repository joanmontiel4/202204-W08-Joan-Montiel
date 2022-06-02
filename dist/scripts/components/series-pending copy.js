import { Component } from './component.js';
import { seriesList } from '../series-list.js';
import { Stars } from './stars.js';
import { DeleteButton } from './delete-button.js';
export class SeriesPending extends Component {
    selector;
    template;
    series;
    constructor(selector) {
        super();
        this.selector = selector;
        this.series = seriesList;
        this.template = this.createTemplate();
        this.outRender(this.selector);
        this.generateStars();
        this.createDeleteButton();
    }
    createTemplate() {
        let htmlItems = '';
        this.series.forEach((item) => {
            if (item.watched === false) {
                console.log(item);
                htmlItems += `
                <li class="serie">
                    <img
                        class="serie__poster"
                        src="${item.poster}"
                        alt="${item.name} poster"
                    />
                    <h4 class="serie__title">${item.name}</h4>
                    <p class="serie__info">${item.creator} (${item.year})</p>
                    <ul class="score serie-${item.id}" data-id="${item.id}">
                    </ul>
                    <slot class="delete-button-serie-${item.id}"></slot>
                </li>
                `;
            }
        });
        return `
        <section class="series-pending">
                <h3 class="subsection-title">Pending series</h3>
                ${this.watchedSeriesParagraph()}
                <ul class="series-list">
                    ${htmlItems}
                </ul>
        </section>
        `;
    }
    watchedSeriesParagraph() {
        const numberOfPendingSeries = this.numberOfPendingSeries();
        if (numberOfPendingSeries !== '0') {
            return `
                <p class="info">You have ${numberOfPendingSeries} series pending to watch</p>
            
            `;
        }
        else {
            return `
                <p class="info">Congrats! You've watched all your series</p>
            `;
        }
    }
    numberOfPendingSeries() {
        let count = 0;
        this.series.forEach((item) => {
            item.watched === false && count++;
        });
        return count.toString();
    }
    generateStars() {
        this.series.forEach((serie) => {
            if (serie.watched === false) {
                new Stars(`.score.serie-${serie.id}`, serie);
            }
        });
    }
    createDeleteButton() {
        this.series.forEach((serie) => {
            if (serie.watched === false) {
                new DeleteButton(`.delete-button-serie-${serie.id}`, serie, this.deleteSerie.bind(this));
            }
        });
    }
    deleteSerie(id) {
        this.series = this.series.filter((item) => {
            return item.id !== id;
        });
        console.log(this.series);
        this.template = this.createTemplate();
        this.outRender('.series-pending');
        this.generateStars();
        this.createDeleteButton();
    }
}
//# sourceMappingURL=series-pending%20copy.js.map