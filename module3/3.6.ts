{
    // getter and setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // setter 
        set deposit(amount: number) {
            this._balance = this.balance + amount;
        }

        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // getter
        get balance() {
            return this._balance
        }

        // public getBalance() {
        //     return this._balance;
        // }
    }

    const goribManuserAccount = new BankAccount(111, 'Mr. gorib', 50);

    // goribManuserAccount.addDeposit(20);   // function call kore
    // const myBalance = goribManuserAccount.getBalance(); // function call kore

    goribManuserAccount.deposit = 50;

    const myBalance = goribManuserAccount.balance; // property moto kore
    console.log(myBalance);



















    // 
}