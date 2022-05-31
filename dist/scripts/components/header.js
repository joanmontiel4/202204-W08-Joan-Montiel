import { Component } from './component.js';
export class Header extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outRender(this.selector);
    }
    createTemplate() {
        return `
            <header class="main-header">
                <h1 class="main-title">My Series</h1>
            </header> 
        `;
    }
}
//# sourceMappingURL=header.js.map