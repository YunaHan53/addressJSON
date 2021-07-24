import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-addresstable',
  templateUrl: './addresstable.component.html',
  styleUrls: ['./addresstable.component.css']
})
export class AddresstableComponent implements OnInit {

  dataSource = new AddressDataSource(this.addressService);
  displayedColumns = ['locationId', 'streetNumber', 'streetName', 'city', 'state', 'zipcode'];
  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
  }

}

// DataSource class to make service request
export class AddressDataSource extends DataSource<any> {
  constructor(private addressService: AddressService) {
    super();
  }

  // Connect method returning Observable of type Address array
  connect(): Observable<Address[]> {
    return this.addressService.getAddress();
  }

  disconnect() { }
}
