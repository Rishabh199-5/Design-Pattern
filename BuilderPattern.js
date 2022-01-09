class Address{
    constructor(zip,street){
        this.zip = zip;
        this.street = street;
    }
}

class User{
    constructor(name, {age,phone,address} = {}){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

// class UserBuilder{
//     constructor(name){
//         this.user = new User(name);
//     }
//     setAge(age){
//         this.user.age = age;
//         return this;
//     }
    
//     setAddress(address){
//         this.user.address = address;
//         return this;
//     }

//     setPhone(phone){
//         this.user.phone = phone;
//         return this;
//     }

//     build(){
//         return this.user;
//     }
// }

// const user = new UserBuilder('Bob').setAge('18').setPhone('1111111').build();
let user = new User('Bob',{age:10,phone:'111111',address:new Address('1','Main')})
console.log(user);