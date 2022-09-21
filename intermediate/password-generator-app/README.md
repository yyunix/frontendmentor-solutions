# Frontend Mentor - Password generator app

![Design preview for the Password generator app coding challenge](./preview.jpg)

## The Challenge
Create a password generator app.

### Users should be able to:
1. Generate a password based on the selected inclusion options
2. Copy the generated password to the computer's clipboard
3. See a strength rating for their generated password
4. View the optimal layout for the interface depending on their device's screen size
5. See hover and focus states for all interactive elements on the page

### Features for User Story #1
**1. Generate a password based on the selected inclusion options**
- A form with input range and checkboxes 
- input range: character length should be visible as user adjusts
- create a disabled input box to display the generated password
 
### Features for User Story #2
**2. Copy the generated password to the computer's clipboard**
- use `navigator.clipboard.writeText` and store it in a state
- reset state after a new seconds

### Features for User Story #3
**3. See a strength rating for their generated password**
- What's my strength rating system?
