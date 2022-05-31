import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';
import { seriesList } from '../series-list.js';
import { iSerie } from '../interfaces/iseries.js';

export class SeriesPending extends Component implements iComponent {
    template: string;
    series: Array<iSerie>;
    constructor(public selector: string) {
        super();
        this.series = seriesList;
        this.template = this.createTemplate();
        this.outRender(this.selector);
    }
    createTemplate() {
        let htmlItems = '';
        let htmlStars = '';
        for (let i = 0; i < 5; i++) {
            htmlStars += `
                <li class="score__star">
                    <i class="icon--score far fa-star" title="${i}/5"></i>
                </li>
            `;
        }

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
                    <ul class="score">
                        ${htmlStars}
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
        } else {
            return `
                <p class="info">Congrats! You've watched all your series</p>
            `;
        }
    }
    numberOfPendingSeries() {
        let count: number = 0;
        this.series.forEach((item) => {
            item.watched === false && count++;
        });
        return count.toString();
    }
}