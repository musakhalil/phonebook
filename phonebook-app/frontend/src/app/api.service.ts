import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from  './contact';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:8080";
  constructor(private httpClient: HttpClient) {}

  getContacts(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }

  getContact(id: number): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.PHP_API_SERVER}/api/read.php/?ID=${id}`);
  }

  createContact(contact: Contact): Observable<Contact>{
    return this.httpClient.post<Contact>(`${this.PHP_API_SERVER}/api/create.php`, contact);
  }

  updateContact(contact: Contact){
    return this.httpClient.put<Contact>(`${this.PHP_API_SERVER}/api/update.php`, contact);
  }

  deleteContact(id: number){
    return this.httpClient.delete<Contact>(`${this.PHP_API_SERVER}/api/delete.php/?ID=${id}`);
  }
}
