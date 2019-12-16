import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router,
    private modalService: BsModalService) { }

  contact: Contact;
  contactID: number;
  selectedContact:  Contact  = { ID :  null , fName: null, lName: null, Number: null};
  initials : string;
  isEdit = false;
  modalRef: BsModalRef;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contactID = params['ID'];
    });
    this.getContact();
  }

  getContact() {
    this.apiService.getContact(this.contactID).subscribe((contact: Contact[])=>{
      this.contact = contact[0];
      this.selectContact(this.contact);
      this.initials = this.contact.fName.charAt(0) + this.contact.lName.charAt(0);
    });
  }
  UpdateContact(form) {
    if (this.selectedContact && this.selectedContact.ID) {
      form.value.ID = this.selectedContact.ID;
      this.apiService.updateContact(form.value).subscribe((Contact: Contact) => {
        this.isEdit = false;
      });
    }

  }

  selectContact(Contact: Contact) {
    this.selectedContact = Contact;
  }

  deleteContact(id) {
    this.apiService.deleteContact(id).subscribe((Contact: Contact) => {
      this.router.navigate(['/']);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
