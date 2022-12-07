import { Component } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T35_1';

  name: string ="";
  cif: string = "";
  address: string = "";
  group: number = 0;
  clientes: Array<Cliente> = [];

  createClient(): void{
    const client : Cliente = {
      name: this.name,
      cif: this.cif,
      address: this.address,
      group: this.group
    }
    this.clientes.push(client);
  }
}
