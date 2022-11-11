import { LightningElement,api } from 'lwc';
import sendTemplateMessage from '@salesforce/apex/WhatsController.sendTemplateMsg'
export default class WhatsAppIntegration extends LightningElement {

    @api recordId; 
    onClickSendMsgTemplate(){
        sendTemplateMessage({contactId : this.recordId})
        .then( result => {
            window.alert("Sent!")
        })
        .catch( error => {
            window.alert("Sending Msg failed :(")
        })
    }
}