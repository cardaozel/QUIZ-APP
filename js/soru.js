function Question(questionText,answerOptions,rightAnswer){
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.rightAnswer = rightAnswer;
}

Question.prototype.checkedAnswer = function(answer) {
    return answer == this.rightAnswer;
}


const questionList = [
    new Question("1- Hangisi JavaScript paket yönetim uygulmasıdır ?", {a:"Node.js",b:"TypeScript",c:"Nugget",d:"Npm"} , "d"),
    new Question("2- Hangisi Frontend kapsamında değerlendirilmez ?", {a:"ccs",b:"html",c:"javascript",d:"sql"} , "d"),
    new Question("3- Hangisi Backend kapsamında değerlendirilir ?", {a:"Node.js",b:"TypeScript",c:"angular",d:"react"} , "a"),
    new Question("4- Hangisi JavaScript programlama dilihi kullanmaz ?", {a:"React",b:"angular",c:"vuejs",d:"asp.net"} , "d")

];