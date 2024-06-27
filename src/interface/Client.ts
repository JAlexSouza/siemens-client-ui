import Address from "./Address";

export default interface Client {
  id: number,
  name: string,
  gender: string,
  birthDay: Date
  address: Address
}