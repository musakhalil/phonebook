import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Contact } from '../contact';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  constructor(private apiService: ApiService, private modalService: BsModalService) { }

  contacts:  Contact[];
  selectedContact:  Contact  = { ID :  null , fName: null, lName: null, Number: null};
  modalRef: BsModalRef;

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.apiService.getContacts().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

  createContact(form) {
      this.apiService.createContact(form.value).subscribe((Contact: Contact) => {
        this.getContacts();
      });
      form.reset();
    }

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
}
