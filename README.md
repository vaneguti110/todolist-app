# todolist-app

1. Install emmet in your texteditor, uses for html & css to show up and complete tags in an easy flow.

2. Install node-js and yarn

3. Open the terminal, type in the location todolist-app, the command below which is an easy to use configuration to start to have a live server

>yarn global add live-server

4. When the file is installed, type in the terminal
>live-server 

It will open the browser using the server and you will see the content from the html display

You should see the following message indicating that the HTTP server is serving port 8000 by default:

>Serving HTTP on 0.0.0.0 port 8000 ...

5. In the terminal, type these babel commands lines packets 
>npm install -g babel-cli@6.24.1
or type 
>yarn global add babel-cli@6.24.1
then, type 
>babel

6. Close the server using the keywords (Ctrl + C), now in the location todolist-app type: 
>yarn global add babel-cli@6.24.1(babel compiler) 

or type this command if the previous one doesn't work, in the terminal:

>$ npm install -g babel-cli@6.24.1

7. Type the following command, if you want to know information of babel 
>$ babel --help 

8. Type clear to clear the window in the terminal
>$ clear

9. Type the following command to set information about the app, there is no need to fill the info. Just click enter
>$ yarn init 

10.Type the command below
>$ yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2 enter

11. Close terminal using Ctrl+C

12. Then, you will see a folder was create it yarn.lock and node_modules in the folder todolist-app (don't change it)

13. Go to terminal in location todolist-app, type
>$babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch enter (leave it open)

When making changes in the file, it will show up here in this terminal while you set the command watch
