class MultipleChoiceQuestion{
    constructor(description,options){
        this.description = description;
        this.options = options;
    }

    printQuestionChoices(){
        this.options.forEach((option, index) => {
            console.log(`${index+1}. ${option}`);
        });
    }
}

class TextQuestion{
    constructor(description){
        this.description = description;
    }

    printQuestionChoices(){
        console.log('Answer _____');
    }
}

class RangeQuestion{
    constructor(description){
        this.description = description;
    }

    printQuestionChoices(){
        console.log('Minimum _____');
        console.log('Maximum _____');

    }
}

const questions = [
    new MultipleChoiceQuestion('What is  your favourite languauge',['CSS', 'HTML',
    'JS', 'Python']),
]

function printQuiz(questions){
    questions.forEach((question) => {
        console.log(question.description);
        question.printQuestionChoices();
        console.log('');
    })
}

printQuiz(questions);