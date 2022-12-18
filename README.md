<h1 align="center">Hi there, I'm <a href="https://www.linkedin.com/in/alexandrl-li/" target="_blank">Alexandr</a> 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">Frontend Web Developer</h3>

## _Assignment: File Manager_
### Description

Your task is to implement File Manager using Node.js APIs.

The file manager should be able to do the following:

- Work using CLI

- Perform basic file operations (copy, move, delete, rename, etc.)

- Utilize Streams API

- Get information about the host machine operating system
 
- Perform hash calculations

- Compress and decompress files

### Technical requirements

- No external dependencies should be required
- Use 18 LTS version of Node.js
- The program is started by npm-script start in following way:

```sh
npm run start -- --username=your_username
```

- After starting the program displays the following text in the console (Username is equal to value that was passed on application start in --username CLI argument)

> Welcome to the File Manager, Username!

- After program work finished (ctrl + c pressed or user sent .exit command into console) the program displays the following text in the console

> Thank you for using File Manager, Username, goodbye!

- At the start of the program and after each end of input/operation current working directory should be printed in following way:

> You are currently in path_to_working_directory

- Starting working directory is current user's home directory (for example, on Windows it's something like system_drive/Users/Username)

- By default program should prompt user in console to print commands and wait for results

- In case of unknown operation or invalid input (missing mandatory arguments, wrong data in arguments, etc.) Invalid input message should be shown and user should be able to enter another command

- In case of error during execution of operation Operation failed message should be shown and user should be able to enter another command (e.g. attempt to perform an operation on a non-existent file or work on a non-existent path should result in the operation fail)

- User can't go upper than root directory (e.g. on Windows it's current local drive root). If user tries to do so, current working directory doesn't change



