import { Component } from './component.js';
import { SeriesPending } from './series-pending.js';
import { SeriesWatched } from './series-watched.js';
export class Stars extends Component {
    selector;
    serie;
    template;
    constructor(selector, serie) {
        super();
        this.selector = selector;
        this.serie = serie;
        this.template = this.createTemplate();
        this.render(this.selector);
        this.addListener();
    }
    createTemplate() {
        let htmlStars = '';
        if (this.serie.watched === false) {
            for (let i = 0; i < 5; i++) {
                htmlStars += `
                    <li class="score__star">
                        <i class="icon--score serie-${this.serie.id} far fa-star" title="${i}/5"></i>
                    </li>
                `;
            }
        }
        else {
            let score = this.serie.score;
            for (let i = 0; i < 5; i++) {
                htmlStars += `
                        <li class="score__star">
                            <i class="icon--score ${score <= 0 ? 'far' : 'fas'} fa-star" title="${i}/5"></i>
                        </li>
                    `;
                score--;
            }
        }
        return htmlStars;
    }
    addListener() {
        const stars = document.querySelectorAll(`.icon--score.serie-${this.serie.id}`);
        if (stars.length !== 0) {
            stars.forEach((star) => star.addEventListener('click', () => {
                this.addScore(this.serie, star.title[0]);
                new SeriesPending('slot.series-pending');
                new SeriesWatched('slot.series-watched');
            }));
        }
    }
    addScore(serie, score) {
        serie.score = Number(score) + 1;
        serie.watched = true;
        console.log('Name: ', serie.name);
        console.log('Score: ', serie.score);
        console.log('Watched: ', serie.watched);
    }
}
//# sourceMappingURL=stars.js.map