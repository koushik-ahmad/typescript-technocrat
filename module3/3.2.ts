{
    // oop - inheritance
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }


    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    const student1 = new Student('Koushik', 23, 'Bangladesh');
    student1.getSleep


    class Teacher extends Person {
        designation: string;
        constructor(
            name: string,
            age: number,
            address: string,
            designation: string
        ) {
            super(name, age, address);
            this.designation = designation;
        }

        takeClass(NumOfClass: number) {
            console.log(`${this.name} will take ${NumOfClass}`);
        }

    }

    const teacher1 = new Teacher('Mashur Rahman', 50, 'Finland', 'Professor');
    teacher1.



















    // 
}