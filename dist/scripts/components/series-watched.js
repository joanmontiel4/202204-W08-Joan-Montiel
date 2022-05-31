import { Component } from './component.js';
import { seriesList } from '../series-list.js';
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
                    <ul class="score" data-id="${item.id}">
                        ${this.generateStars(item.score)}
                    </ul>
                    <i class="fas fa-times-circle icon--delete"></i>
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
    generateStars(score) {
        let htmlStars = '';
        for (let i = 0; i < 5; i++) {
            htmlStars += `
                    <li class="score__star">
                        <i class="icon--score ${score <= 0 ? 'far' : 'fas'} fa-star" title="${i}/5"></i>
                    </li>
                `;
            score--;
        }
        return htmlStars;
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
}
//# sourceMappingURL=series-watched.js.map