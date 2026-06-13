import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {
    childMsg
    sendChildMsg() {
        this.childMsg = this.template.querySelector('[data-id="parentmsg"]').value;
    }

}