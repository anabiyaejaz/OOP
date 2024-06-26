#! /usr/bin/env node

import inquirer from "inquirer";

class Student {
    name:string

constructor(names:string){
    this.name = names

}
}

class Person{
    students:Student[] = []
    addStudents(object:Student){
    this.students.push(object)
}
}

const Persons = new Person

 const startProgram = async (Persons:Person)=>{
    do{
    console.log("Welcome!");
    const answer = await inquirer.prompt(
        [
            {
                name:"select",
                type: "list",
                message: "Select an option",
                choices: ["Staff", "Student", "Exit"]
            }
        ]
    );

    if(answer.select === "Staff"){
        console.log("You approach the staff room.");
    
    } else if (answer.select === "Student"){

        const Std_ans = await inquirer.prompt(
            [
                {
                    name: "student",
                    type: "input",
                    message: "Enter the student name: "
                }
            ]
        );
        const student = Persons.students.find(val => val.name === Std_ans.select)
        
        
        if(!student){
                const name = new Student(Std_ans.student)
               
                Persons.addStudents(name)
                console.log(`Hello i am ${name.name}. Nice to meet you`)
                console.log("New student added");
                console.log("Current student list:");
                console.log(Persons.students);
                
        }else {
            console.log(`Hello i am ${student.name}. Nice to meet you`);
            console.log("Exiting the list:");
            console.log(Persons.students);
            
            
        }
    } else if (answer.select ===  "Exit"){
        console.log("Exiting the program...");
        
    }
}while(true)
       
}



startProgram(Persons)