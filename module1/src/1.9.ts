{
    // Type Alias

    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
        address: string;
    }

    const student1: Student = {
        name: 'Koushik',
        age: 50,
        contactNo: '015000000000',
        gender: 'male',
        address: 'Natore',
    };

    const student2: Student = {
        name: 'Mir',
        age: 40,
        gender: 'male',
        address: 'dhaka'
    };

    const student3: Student = {
        name: 'Mir',
        age: 40,
        gender: 'male',
        address: 'dhaka'
    };



    type UserName = string
    type IsAdmin = boolean

    const userName: UserName = 'Koushik'
    const isAdmin: IsAdmin = true


    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;











    // 
}