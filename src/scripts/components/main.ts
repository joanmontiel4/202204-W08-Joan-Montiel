import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';

export class Main extends Component implements iComponent {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(this.selector);
    }
    createTemplate() {
        return `
            <main class="main">
                <section class="series">
                        <h2 class="section-title">Series list [[mainComponent]]</h2>
                        <slot class="series-pending"></slot>
                        <slot class="series-watched"></slot>
                </section>    
            </main>
        `;
    }
}
