# FizzBuzz Challenge  
FizzBuzz Challenge using Javascript


## Questions & Answers

#### *Question 1. Describe the following code*
```
global.browser = new BrowserHelpers()
global.expect = chai.expect;
```

### *Answer*
```
The global attribute usage is that it puts the subject in a so called global scope. This means that it can be accessed from anywhere by scripts and functions.
In our case this means that we can expect chai module to be accessible and that newly opened browser can be modified.
```

#### *Question 2. Why are we not placing the given code inside the It block?*
```
let fizzBuzz = new FizzBuzz
```
### *Answer*
```
This line of code is defining the fizzBuzz variable to a new instance of FizzBuzz.  
We are also not placing this code inside the It block because that is only for our expected output.  
```

#### *Question 3. what is the difference between these to operators?*
```
==
===
```
### *Answer*
```
These two operators are very similiar in both looks and usability.  
The == operator means Equals to.  
The === operator means Equal value and equal type of data.
```
#### *Question 4. Why is this code moved to the top?*
```
(number % 5 === 0)
```
### *Answer*
```
We place this code at the top because Javascripts reads and executes the If block from top to bottom.  
In this case we want the highest number to be executed first in order to not block or hinder the next one in line.  
Which menas that we also will place FizzBuzz at the top since it need to be divisible by both 3 & 5.
```
#### *Question 5. What is the difference between Unit testing and feature testing?*

### *Answer*
```
The difference between these two are that Unit testing focuses more on the inner more detailed components that builds up the systems structure and functions. Whereas feature testing focuses more on the outer features and functions that the end user will come into contact with.
```
#### *Question 6. Explain what this code does*
```
describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})
```
### *Answer*
```
What this code does is that it tells the browser how to act.  
In this case it tells the browser what actions it needs to take for the user to be able to visit and use the functions of the webpage. 
```
#### *Question 7. Explain what expectations in the context of testing are*

### *Answer*
```
When we use expectation in the context of testing it refers to the outcome we expect our test to have.  
We usually have one expect per every test It block created.
```
#### *Question 8. Explain what is happening in this code.*
```
<script src="js/fizzbuzz.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            button.addEventListener('click', () =>{
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>
```
### *Answer*
```
This entire code snippet is written in the html file using the script tag to enable Javascript code.  
In the first line we connect our external JS file to our html file.  
In the second script tag section, we let the buttons and answer div load in the dom and then we define what & how they should act. This means displaying FizzBuzz, Fizz or Buzz depending on the input.
```
#### *Question 9. Explain what a CDN (Content Delivery Network) is?*

### *Answer*
```
CDN (Content Delivery Network) could almost be compared to a kind of external hosting style where you fetch data from a network of servers. What normally happens is that you fetch data from the nearest server reducing time and depending on what kind of CDN removes the need to store data locally. In this case we are fetchinig CSS like style and for this FizzBuzz page.
```