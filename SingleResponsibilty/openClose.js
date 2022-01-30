function printQuiz(questions){
    questions.forEach(question => {
        console.log(question.description);
        switch(question.type){
            case 'boolean':
                console.log('1. True');
                console.log('2. False');
                break;
            case 'multipleChioce':
                question.options.forEach((option,index) => {
                    console.log(`${index +1}. ${option}`);
                })    
                break;
            case 'text':
                console.log('Answer: _______');
                break;        
        }
        console.log('');
        
    });
}

const questions = [
    { type: 'boolean', description: 'This video is useful' },
    {
        type: 'multipleChoice', description: 'What is  your favourite languauge', options: ['CSS', 'HTML',
            'JS', 'Python']
    },
    { type: 'text', description: 'Describe your favuorite JS feature.' }
]

printQuiz(questions);