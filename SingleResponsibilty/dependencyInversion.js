class Store{
    constructor(payementProcessor){
        this.payementProcessor = payementProcessor;
    }

    purchaseBike(quantity){
        this.payementProcessor.pay(200*quantity);
    }

    purchaseHelmet(quantity){
        this.payementProcessor.pay(15*quantity);
    }
}

class StripeProceesor{
    constructor(user){
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars){
        this.stripe.makePayment(amountInDollars*100);
    }   
}

class Stripe{
    constructor(user){
        this.user = user;
    }

    makePayment(amountInCents){
        console.log(`${this.user} made payment of ${amountInCents/100} with Stripe`);
    }

}

class Paypal{
    constructor(user){
        this.user = user;
    }

    makePayment(user,amountInDollars){
        console.log(`${user} made payment of ${amountInDollars} with Paypal`);
    }

}

const store = new Store(new StripeProceesor('John'));
store.purchaseBike(2);