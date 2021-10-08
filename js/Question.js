class Question {

  constructor() {
    // creating all elemets
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
  
    this.button = createButton('Submit');
    this.button2=createButton('question2')
 

    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2");
    this.greeting = createElement("h2");  
    this.question2=createElement("h2");
    this.optionb1 = createElement('h4');
    this.optionb2 = createElement('h4');
    this.button3=createButton('option1')
    this.button3.position(250,130)
    this.button4=createButton('option2')
    this.button4.position(250,150)
    this.button5=createButton('option3')
    this.button5.position(250,170)
    this.button6=createButton('option4')
    this.button6.position(250,190)
  
  }

  hide(){
    // creating function to hide
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.button2.hide()
    this.input2.hide();
    
    this.message.hide();
  }
  setElementStyle(){
    this.input1.class(".customInput")
   
  }                                  
  
  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

 // makking question
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // setting position to all elements
    this.question.position(150, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.button2.position(350,300)
   

    this.button.mousePressed(()=>{
      // making them invisible{elements}
      this.input1.hide();
       this.button.hide();
       this.input2.hide();
       this.question.hide();
       this.option1.hide();
       this.option2.hide();
       this.option3.hide();
       this.option4.hide();
       this.button3.hide();
       this.button4.hide();
       this.button5.hide();
       this.button6.hide();
       this.message.html ("Thank You, Your Answer Has Been Submitted");
       this.message.position(250, 150);
       var message = `hello ${this.input1.value()} correct option is 2`
       this.greeting.html(message);
       this.greeting.position(250,250)
  
      
      
     


    });
    this.button2.mousePressed(()=>{
    
      // making them invisible{elements}
      this.input1.hide();
       this.button.hide();
       this.input2.hide();
       this.question.hide();
       this.option1.hide();
       this.option2.hide();
       this.option3.hide();
       this.option4.hide();
       this.button2.hide();
       this.message.hide();
       this.greeting.hide();
       //setting position to greeting
       this.greeting.position(width/2-300,height/2)
       this.question2.html("Q2.who was the 1 st president of india ")
       this.question2.position(150,80)
       this.optionb1.html("1: RAM NATH KOVIND " );
    this.optionb1.position(150, 120);
    this.optionb2.html("2: rajendra prasad" );
    this.optionb2.position(150, 140);
   

 
 
      
     


    });
    this.button4.mousePressed(()=>{
      // making them invisible{elements}
      this.input1.hide();
       this.button.hide();
       this.input2.hide();
       this.question.hide();
       this.option1.hide();
       this.option2.hide();
       this.option3.hide();
       this.option4.hide();
       this.button3.hide();
       this.button4.hide();
       this.button5.hide();
       this.button6.hide();
       this.message.hide();
       
       var message = `congrats ${this.input1.value()} that is the correct answer`
       this.greeting.html(message);
       this.greeting.position(150,250)
  
      
      
     


    });
    this.button5.mousePressed(()=>{
      // making them invisible{elements}
      this.input1.hide();
       this.button.hide();
       this.input2.hide();
       this.question.hide();
       this.option1.hide();
       this.option2.hide();
       this.option3.hide();
       this.option4.hide();
       this.button3.hide();
       this.button4.hide();
       this.button5.hide();
       this.button6.hide();
       this.message.hide();
       
       var message = `sorry ${this.input1.value()} that is the incorrect answer`
       this.greeting.html(message);
       this.greeting.position(150,250)
  
      
      
     


    });
    this.button3.mousePressed(()=>{
      // making them invisible{elements}
      this.input1.hide();
       this.button.hide();
       this.input2.hide();
       this.question.hide();
       this.option1.hide();
       this.option2.hide();
       this.option3.hide();
       this.option4.hide();
       this.button3.hide();
       this.button4.hide();
       this.button5.hide();
       this.button6.hide();
       this.message.hide();
       
       var message = `sorry ${this.input1.value()} that is the incorrect answer`
       this.greeting.html(message);
       this.greeting.position(150,250)
  
      
      
     


    });
    this.button6.mousePressed(()=>{
      // making them invisible{elements}
      this.input1.hide();
       this.button.hide();
       this.input2.hide();
       this.question.hide();
       this.option1.hide();
       this.option2.hide();
       this.option3.hide();
       this.option4.hide();
       this.button3.hide();
       this.button4.hide();
       this.button5.hide();
       this.button6.hide();
       this.message.hide();
       
       var message = `sorry ${this.input1.value()} that is the incorrect answer`
       this.greeting.html(message);
       this.greeting.position(150,250)
  
      
      
     


    });
    
  }
}
