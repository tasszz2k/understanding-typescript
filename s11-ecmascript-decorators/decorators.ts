function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
  console.log('Class decorator called');
  console.log(target);
  console.log(ctx);

  return class extends target {
    age = 30;
  }
}

function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext) {
  console.log(target);
  console.log(ctx);

  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  })

  return function (this: any){
    console.log('Executing original function');
    target.apply(this);
  }
}

function fieldLogger( target: undefined, ctx: ClassFieldDecoratorContext) {
  console.log(target);
  console.log(ctx);

  return (initialValue: any) => {
    console.log(initialValue);
    return 'xxxxxxxxxxxx';
  }
}

@logger
class Person {
  @fieldLogger
  name = 'Max';

  constructor() {
    this.greet = this.greet.bind(this);
  }

  @autobind
  greet() {
    console.log('Hello ' + this.name);
  }
}

const person = new Person();
console.log(person);
person.greet();

const greet = person.greet;
greet();
