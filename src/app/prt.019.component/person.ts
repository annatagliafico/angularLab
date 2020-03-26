export class Person{
    public name: string = "default"
    public address: string = "default"
    public age: number = 0;

    public constructor(
        fields?: {
            name?: string,
            address?: string,
            age?: number
        }) {
            if (fields) {
                this.name = fields.name || this.name;       
                this.address = fields.address || this.address;        
                this.age = fields.age || this.age;        
            }
    }
}