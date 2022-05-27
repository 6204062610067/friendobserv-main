/* friend data model */
export class Friend {
  id: number;
  name: string;
  email:string;
  age: number;

  constructor(id:number, name:string, email:string, age:number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }
}
