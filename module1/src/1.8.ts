{
    // object destructuring

    const user = {
        id: 345,
        name: {
            firstName: 'Koushik',
            middleName: 'Ahmad',
            lastName: 'Koushik',
        },
        contactNo: '01700000000',
        address: 'Uganda',
    };

    const {
        contactNo,
        name: { middleName },
    } = user;



    // array destructuring
    const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'phoebe'];

    const [, , bestFriend, ...rest] = myFriends;






}