class User {
  public hobbies: string[] = [];
  readonly id = Math.floor(Math.random() * 100);
  private _course: string = '';

  constructor(public name: string, public age: number = 39) {
    this.name = name;
    this.age = age;
  }

  set course(value: string) {
    if (value.length > 1) {
      this._course = value;
    } else {
      throw new Error('Invalid course name!');
    }
  }

  get info() {
    return this.name + ' is ' + this.age + ' years old.' + this._course;
  }

}

const max = new User('Max', 30);
const fred = new User('Fred');
max.hobbies = ['Sports', 'Cooking'];
max.course = 'Sports';
console.log(max);
console.log(max.info);
console.log(fred);


class Employee extends User {

}