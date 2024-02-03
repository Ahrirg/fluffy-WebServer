Well This is documentation of my WebServer code.

-=-=-=--=- Purpose -=-=-=--=-

This node.js webserver is made to run multiple diffrend codes at same time using Node.js Child_process 

-=-=-=--=- Why? -=-=-=--=-

Wanted to learn JavaScript, html, Css and Node.js soo i thought this could be fun project + I personaly ganna use it for discord bots and multiple simple Node.js webservers


-=-=-=--=- Capabilities -=-=-=--=-

It can run on basically anything that has Node.js + npm
Tested os (Windows 11, Ubuntu 23.10 server)

It should run any files using interpreter(aka "python /index.py", "node /index.js"...)

Can get info about Os and Hardware(CPU not 100% acurate)

Can create button links for remembering ip and ports easier

-=-=-=-=- How to use -=-=-=-=-
Add New Program Code
1. Go to AddNewCode tab
2. select .zip file format
3. EXEname must match the name of ur executable
4. select other options
5. refresh page

Delete Program Code
1. find code that wana delete
2. press delete

-=-=-=-=- Q&A -=-=-=-=-

Q: How to add custom launch option

A: go to ./views/CC.ejs find 93 line (there is a comment "IF U WANT TO ADD MORE INTERPRETERS...") above "</select>" add "<option value="!HERE SHOULD BE UR INTERPRETER NAME!">!NAME!</option>" change !inside shit! to ur chosing for example python.

Q: Why there is Ip undefined and there is no program console output

A: go to /routes/api.js go to line 33 find commented console.log, uncomment it, restart server, when somebody tries to load page, on server console should be array. go back to api.js chance line 40 accordingly

Q: Will u update this

A: Only if i personally ganna need it

Q: Why is the code bad

A: as i stated this is my project for learning JavaScript and soo on, soo yeah some parts are trash.

Q: Why English bad

A: I'm Lithuanian

-=-=-=-=- List of dependacies -=-=-=-=-

npm i cors

npm i multer

npm i adm-zip

npm i ps-list@7.2.0

npm i ws

npm i node-os-utils

npm i node-disk-info
