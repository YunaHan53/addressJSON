import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  /* Make sure to run the json-server in your terminal first
   - npm install -g json-server
   - json-server db.json
   */
  private serviceUrl = 'http://localhost:3000/addresses';

  constructor(private http: HttpClient) { }

  // GET addresses from the server
  getAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(this.serviceUrl);
  }
}
