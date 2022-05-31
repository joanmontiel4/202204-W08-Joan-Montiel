import { Component } from './component.js';
import { SeriesPending } from './series-pending.js';
import { SeriesWatched } from './series-watched.js';
export class Main extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outRender(this.selector);
        this.createContent();
    }
    createTemplate() {
        return `
            <main class="main">
                <section class="series">
                        <h2 class="section-title">Series list</h2>
                        <slot class="series-pending"></slot>
                        <slot class="series-watched"></slot>
                </section>    
            </main>
        `;
    }
    createContent() {
        new SeriesPending('slot.series-pending');
        new SeriesWatched('slot.series-watched');
    }
}
//# sourceMappingURL=main.js.map