class Calculator {
    constructor(){
        this.value = 0;
        this.history = [];
    }

    executeCommand(command){
        this.value = command.execute(this.value);
        this.history.push(command);
    }

    undo(){
        const command = this.history.pop();
        this.value = command.undo(this.value);
    }
}

class AddCommand {
    constructor(valueToAdd){
        this.valueToAdd = valueToAdd;
    }

    execute(currentValue){
        return currentValue + this.valueToAdd;
    }

    undo(currentValue){
        return currentValue - this.valueToAdd;
    }
}

class MulitplyCommand {
    constructor(valueToMultiply){
        this.valueToMultiply = valueToMultiply;
    }

    execute(currentValue){
        return currentValue * this.valueToMultiply;
    }

    undo(currentValue){
        return currentValue / this.valueToMultiply;
    }
}

class AddThenMulitplyCommand {
    constructor(valueToAdd,valueToMultiply){
       this.addCommand = new AddCommand(valueToAdd);
       this.mulitplyCommand = new MulitplyCommand(valueToMultiply);
    }

    execute(currentValue){
        const newValue = this.addCommand.execute(currentValue);
        return this.mulitplyCommand.execute(newValue);
    }

    undo(currentValue){
        const newValue = this.mulitplyCommand.undo(currentValue);
        return this.addCommand.undo(newValue);
    }
}

const calculator = new Calculator();
// calculator.executeCommand(new AddCommand(10));
// calculator.executeCommand(new MulitplyCommand(2));
calculator.executeCommand(new AddThenMulitplyCommand(10,2));
console.log(calculator.value);
calculator.undo();
console.log(calculator.value);
