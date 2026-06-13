import { LightningElement,api } from 'lwc';

export default class ChildCmp extends LightningElement {
    @api getParentMsgByAttribute;
    getParentMsgByChildMethod
    @api callChildMethodForMsgPassing(parentMsg){
        this.getParentMsgByChildMethod = parentMsg;
    }
}