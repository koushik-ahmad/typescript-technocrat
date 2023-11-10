{
    //
    // generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = 'bike' | 'car' | 'ship';  // manually

    type Owner2 = keyof Vehicle

    // const person1 : Owner2 = 'car'


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: 'Mr. Koushik',
        age: 23,
        address: 'Natore'
    };

    const car = {
        model: 'Toyota 100',
        year: 2000,
    };

    const result1 = getPropertyValue(car, 'model');








    // const user = {
    //     name: 'Mr. Koushik',
    //     age: 23,
    //     address: 'Natore'
    // }

    // user['age']   23









    // 
}