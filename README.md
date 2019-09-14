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

#### *Question 2. Why are we not placing the given code inside the It block*
```
let fizzBuzz = new FizzBuzz
```
### *Answer*
```
This line of code is defining the fizzBuzz variable to a new instance of FizzBuzz.  
We are also not placing this code inside the It block because that is only for our expected output.  
```

#### *Question 3. what is the difference between these to operators*
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
#### *Question 5. test*
```
question 5
```
### *Answer*
```

```
#### *Question 6. test*
```
question 6
```
### *Answer*
```

```
#### *Question 7. test*
```
question 7
```
### *Answer*
```

```