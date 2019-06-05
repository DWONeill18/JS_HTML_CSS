class Cheetah extends Animal {
    constructor(name, age, family) {
        super(name);
        this.name = name;
        this.age = age;
        this.family = family;

    }
    run() {

        console.log('zoom');
    }

}

let cheetah = new Cheetah('johnny', 12, 'feline');
cheetah.run();
cheetah.breathe();

console.log(cheetah.name);
