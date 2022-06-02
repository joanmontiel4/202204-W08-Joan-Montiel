import { Component } from './component.js';
import { seriesList } from '../series-list.js';
import { DeleteButton } from './delete-button.js';
import { Serie } from './serie.js';
export class SeriesList extends Component {
    selector;
    template;
    series;
    constructor(selector) {
        super();
        this.selector = selector;
        this.series = seriesList;
        this.template = this.createTemplate();
        this.outRender(this.selector);
        this.createSerie();
        this.createDeleteButton();
    }
    createTemplate() {
        let htmlPendingSeries = '';
        let htmlWatchedSeries = '';
        this.series.forEach((item) => {
            if (item.watched === false) {
                htmlPendingSeries += `
                <li class="serie serie-card-${item.id}">
                </li>
                `;
            }
            else {
                htmlWatchedSeries += `
                <li class="serie serie-card-${item.id}">
                </li>
                `;
            }
        });
        return `
    <section class="series">
        <h2 class="section-title">Series list</h2>
        <section class="series-pending">
                <h3 class="subsection-title">Pending series</h3>
                ${this.pendingSeriesParagraph()}
                <ul class="series-list">
                    ${htmlPendingSeries}
                </ul>
        </section>
        <section class="series-watched">
                 <h3 class="subsection-title">Watched series</h3>
                 ${this.watchedSeriesParagraph()}
                 <ul class="series-list series-list--watched">
                    ${htmlWatchedSeries}
                </ul>
        </section>
    </section>
        `;
    }
    pendingSeriesParagraph() {
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
    numberOfPendingSeries() {
        let count = 0;
        this.series.forEach((item) => {
            item.watched === false && count++;
        });
        return count.toString();
    }
    numberOfWatchedSeries() {
        const numberSeries = this.series.length - Number(this.numberOfPendingSeries());
        return numberSeries.toString();
    }
    createSerie() {
        this.series.forEach((serie) => {
            new Serie(`.serie-card-${serie.id}`, serie, this.renderSeries.bind(this));
        });
    }
    createDeleteButton() {
        this.series.forEach((serie) => {
            new DeleteButton(`.delete-button-serie-${serie.id}`, serie, this.deleteSerie.bind(this));
        });
    }
    renderSeries() {
        this.template = this.createTemplate();
        this.outRender('.series');
        this.createSerie();
        this.createDeleteButton();
    }
    deleteSerie(id) {
        this.series = this.series.filter((item) => {
            return item.id !== id;
        });
        this.renderSeries();
    }
}
//# sourceMappingURL=series-list.js.map