import { LightningElement, wire } from 'lwc';
import LAST_NAME from'@salesforce/schema/Contact.LastName';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import EMAIL from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    { label: 'FIRST NAME', fieldName: FIRST_NAME.fieldApiName, type: 'text' },
    { label: 'LAST NAME', fieldName: LAST_NAME.fieldApiName, type: 'text' },
    { label: ' EMAIL ',  fieldName: EMAIL.fieldApiName, type: 'text' }
];
export default class ContactList extends LightningElement  {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;
    get errors() {
        return (this.accounts.error) ?
            reduceErrors(this.accounts.error) : [];
    }
}
