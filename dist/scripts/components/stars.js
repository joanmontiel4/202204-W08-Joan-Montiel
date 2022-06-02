import { Component } from './component.js';
export class Stars extends Component {
    selector;
    serie;
    renderSeries;
    template;
    constructor(selector, serie, renderSeries) {
        super();
        this.selector = selector;
        this.serie = serie;
        this.renderSeries = renderSeries;
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
                        <i class="icon--score serie-${this.serie.id} far fa-star" title="${i + 1}/5"></i>
                    </li>
                `;
            }
        }
        else {
            let score = this.serie.score;
            for (let i = 0; i < 5; i++) {
                htmlStars += `
                        <li class="score__star">
                            <i class="icon--score ${score <= 0 ? 'far' : 'fas'} fa-star" title="${i + 1}/5"></i>
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
                this.handlerStarEvent(this.serie, star.title[0]);
            }));
        }
        return;
    }
    handlerStarEvent(serie, score) {
        serie.score = Number(score);
        serie.watched = true;
        this.renderSeries();
    }
}
//# sourceMappingURL=stars.js.map