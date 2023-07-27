 class Person {
    constructor(firstName, lastName, age, gender, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.email = email;
    }
  
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  
    getEmail() {
      return this.email;
    }
  }

  const person1 = new Person("John", "Doe", 30, "Male", "john@gmail.com");
  
  console.log(person1.getFullName());
  console.log(person1.getAge());   
  console.log(person1.getGender()); 
  console.log(person1.getEmail()); 
