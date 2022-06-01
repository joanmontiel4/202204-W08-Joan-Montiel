import { Component } from './component.js';
import { seriesList } from '../series-list.js';
import { Stars } from './stars.js';
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
    }
    createTemplate() {
        let htmlItems = '';
        this.series.forEach((item) => {
            if (item.watched === false) {
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
                    <i class="fas fa-times-circle icon--delete"></i>
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
}
//# sourceMappingURL=series-pending.js.map