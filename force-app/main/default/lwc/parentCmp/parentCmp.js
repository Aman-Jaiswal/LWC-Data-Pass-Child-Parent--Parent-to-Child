import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {
    sendChildMsgByAttribute;
    sendChildMsgByCallingChildMethod;
    getMsgChildCmp
    sendChildMsg(event) {
        // 2 ways to get textbox value
        this.sendChildMsgByAttribute = this.template.querySelector('[data-id="parentmsg"]').value;
        this.sendChildMsgByCallingChildMethod = this.refs.msgForChild.value;
        this.refs.callChildMethodForMsgPassing.getMsgFromParentCmp(this.sendChildMsgByCallingChildMethod);
    }
    getMsgFromChildCmp(event){
        this.getMsgChildCmp = event.detail.data;
    }


}