import { Component } from './component.js';
import { seriesList } from '../series-list.js';
import { Stars } from './stars.js';
import { DeleteButton } from './delete-button.js';
export class SeriesWatched extends Component {
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
            if (item.watched === true) {
                htmlItems += `
                    <li class="serie">
                    <img
                        class="serie__poster"
                        src="${item.poster}"
                        alt="${item.name} poster"
                    />
                    <h4 class="serie__title">${item.name}</h4>
                    <p class="serie__info">${item.creator} (${item.year})</p>
                    <ul class="score watched serie-${item.id}" data-id="${item.id}">
                    </ul>
                    <i class="fas fa-times-circle icon--delete serie-${item.id}"></i>
                </li>
                `;
            }
        });
        return `
        <section class="series-watched">
                 <h3 class="subsection-title">Watched series</h3>
                 ${this.watchedSeriesParagraph()}
                 <ul class="series-list series-list--watched">
                    ${htmlItems}
                </ul>
        </section>
        `;
    }
    numberOfWatchedSeries() {
        let count = 0;
        this.series.forEach((item) => {
            item.watched === true && count++;
        });
        return count.toString();
    }
    watchedSeriesParagraph() {
        const numberOfWatchedSeries = this.numberOfWatchedSeries();
        if (numberOfWatchedSeries !== '0') {
            return `
                <p class="info">You have watched ${this.numberOfWatchedSeries()} series</p-->
            
            `;
        }
        else {
            return `
                <p class="info">You have not watched any serie</p>
            `;
        }
    }
    generateStars() {
        this.series.forEach((serie) => {
            if (serie.watched === true) {
                new Stars(`.score.watched.serie-${serie.id}`, serie);
            }
        });
    }
    createDeleteButton() {
        this.series.forEach((serie) => {
            if (serie.watched === true) {
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
        this.outRender('.series-watched');
        this.generateStars();
        this.createDeleteButton();
    }
}
//# sourceMappingURL=series-watched.js.map