export class Cliente {
  name: string ="";
  cif: string = "";
  address: string = "";
  group: number = 0;

  constructor (name: string, cif: string, address: string, group: number) {
    this.name = name,
    this.cif = cif,
    this.address = address,
    this.group = group
  }
}
