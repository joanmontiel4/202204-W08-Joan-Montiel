import { Component } from './component.js';
export class DeleteButton extends Component {
    selector;
    serie;
    deleteSerie;
    template;
    constructor(selector, serie, deleteSerie) {
        super();
        this.selector = selector;
        this.serie = serie;
        this.deleteSerie = deleteSerie;
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
        const button = document.querySelector(`.icon--delete.serie-${this.serie.id}`);
        button.addEventListener('click', () => {
            this.handlerDeleteButton(this.serie.id);
        });
    }
    handlerDeleteButton(id) {
        this.deleteSerie(id);
    }
}
//# sourceMappingURL=delete-button.js.map