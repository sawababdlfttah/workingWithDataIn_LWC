import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';  
import ACCOUNT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME from'@salesforce/schema/Contact.FirstName';
import LAST_NAME from'@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';



//import Email_FIELD from '@salesforce/schema/Contact.Email';

export default class contactCreator extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    fields = [ FIRST_NAME,LAST_NAME,EMAIL_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}