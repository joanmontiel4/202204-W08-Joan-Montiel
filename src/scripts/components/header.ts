import { iComponent } from '../interfaces/icomponent.js';
import { Component } from './component.js';

export class Header extends Component implements iComponent {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(this.selector);
    }
    createTemplate() {
        return `
            <header class="main-header">
                <h1 class="main-title">My Series [[headerComponent]]</h1>
            </header> 
        `;
    }
}
