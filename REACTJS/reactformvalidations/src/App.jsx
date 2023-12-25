import React, { useState } from "react";
import "./App.css";
import * as yup from 'yup'; // importing functions from yup library

function App() {
  const [firstName, setFirstName] = useState(''); // useState to store first name
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // defining yup schema to validate out form
  const userSchema = yup.object().shape({
    // name can not be an empty string so we will use the required function
    firstName: yup.string().required(),
    lastName: yup.string(),
    // email can not be an empty string so we will use the requried function
    email: yup.string().email().required(),
    // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. 
    // Yup passwords by default handle the conditions of at least one uppercase, at least one lowercase, and at least one special character in the password
    password: yup.string().min(8).required(),
    age: yup.string(),
    mobile: yup.string(),
  })

  // Variable which will validate the input data whenever submit button is clicked.
  const validateForm = async () => {
    // creating a form data object
    let dataObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      age: age,
      mobile: mobile,
    }
    console.log(validateForm);
    // validating this dataObject concerning Yup userSchema
    const isValid = await userSchema.isValid(dataObject)

    if (isValid) {
      alert('Form is Valid')
    } else {
      alert('Form is Invalid')
    }
  }

  // // Variable which will validate the input data whenever submit button is clicked.
  // const validateForm = () => {
  //   // Check if the first name is an empty string or not.
  //   if (firstName.length == 0) {
  //     alert('Invalid Form, First name can not be empty')
  //     return
  //   }

  //   // check if the email is an empty string or not.
  //   if (email.length == 0) {
  //     alert('Invalid Form, Email address ca not be empty')
  //     return
  //   }

  //   // check if the password follows constraints or not.
  //   // if password length is less than 8 characters, alert invalid form.
  //   if (password.length < 8) {
  //     alert('Invalid Form, Password must contain greater then or equal to 8 characters.')
  //     return
  //   }
  //   // variable to count uppercase characters in the password.
  //   let countUpperCase = 0
  //   // variable to count lowercase characters in the password.
  //   let countLowerCase = 0
  //   // variable to count digit characters in the password.
  //   let countDigit = 0
  //   // variable to count special characters in the password.
  //   let countSpecialCharacters = 0

  //   for (let i = 0; i < password.length; i++) {
  //     const specialChars = [
  //       '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', ':', ';', '<', '>'
  //     ]

  //     if (specialChars.includes(password[i])) {
  //       // this means that the character is special, so increment countSpecialCharacters
  //       countSpecialCharacters++
  //     } else if (!isNaN(password[i] * 1)) {
  //       // this means that the character is a digit, so increment countDigit
  //       countDigit++
  //     } else {
  //       if (password[i] == password[i].toUpperCase()) {
  //         // this means that the character is an uppercase character, so increment countUpperCase
  //         countUpperCase++
  //       }
  //       if (password[i] == password[i].toLowerCase()) {
  //         // this means that the character is lowercase, so increment countUpperCase
  //         countLowerCase++
  //       }
  //     }
  //   }

  //   if (countLowerCase == 0) {
  //     // invalid form, 0  lowercase characters
  //     alert('Invalid Form, 0 lower case characters in password')
  //     return
  //   }
  //   if (countUpperCase == 0) {
  //     // invalid form, 0 uppercase characters
  //     alert('Invalid Form, 0 upper case characters in password')
  //     return
  //   }
  //   if (countDigit == 0) {
  //     // invalid form, 0 digit characters
  //     alert('Invalid Form, 0 digit characters in password')
  //     return
  //   }
  //   if (countSpecialCharacters == 0) {
  //     // invalid form, 0 special characters characters
  //     alert('Invalid Form, 0 special characters in password')
  //     return
  //   }

  //   // if all the conditions are valid, this means that form is valid
  //   alert('Form is valid')
  // }

  return (
    <div className="main">
      <h1>Form Validate using Yup</h1>
      <form>
        <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
        <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
        <input placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} />
        <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> <br />
        <button type="submit" onClick={() => validateForm()}>Submit</button>
      </form>
    </div>
  )
}

export default App;