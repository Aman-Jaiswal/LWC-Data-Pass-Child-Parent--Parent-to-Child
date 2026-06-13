import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {
    sendChildMsgByAttribute;
    sendChildMsgByCallingChildMethod;
    sendChildMsg() {
        // 2 ways to get textbox value
        this.sendChildMsgByAttribute = this.template.querySelector('[data-id="parentmsg"]').value;
        this.sendChildMsgByCallingChildMethod =  this.refs.msgForChild.value;
        this.refs.callChildMethodForMsgPassing.getMsgFromParentCmp(this.childMsg);
    }

   

}