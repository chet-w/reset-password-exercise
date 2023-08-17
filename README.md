## Reset Password Exercise
Reset Password exercise for Westpac.

### Requirement
Create a simple reset password screen using React which can validate a password. A password is valid when:
- If the password has at least 8 characters, it also includes at least one number and two special characters (!, ?, etc.)
- The password has more than 15 characters

These considerations are both handled and validated using the unit tests in in the `src/screens/__tests__/helpers.spec.ts` file.

#### Considerations in the approach
The password validation is not 100% perfect, as there are assumptions as to what a 'special character' is. In this implementation, the characters are matched against a regex which includes common symbols but does not include `[` or `]`,` for example. The validation also does not take emojis or similar symbols into account. 

### Extras
Other bits added for this exercise include:
- Styling and theming using `styled-components`
- Git log using the Conventional Commits approach
- Hide/Unhide buttons for the Password field


## Getting started
1. Clone the repo
```sh
$ git clone git@github.com:chet-w/reset-password-exercise.git
```
2. Install dependencies
```sh
$ npm i
```
3. Run the app
```sh
$ npm start
```

## Running Tests
```sh
$ npm test
```