# fluffy-WebServer
A simple Node.js based WebServer that can host other code/programs. 

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


-=-=-=-=- How to use -=-=-=-=-=-

Start Server On Ubuntu/Linux/Windows:
1.Use some kind of tutorial on youtube

To upload code:
1. go to Add New Code tab
2. select options name file select launcher
3. IT IS IMPORTANT that the EXEname is the same as ur programs
4. Select ZIP formated file. (It works if its nested "filename.zip/filename/index.js")
5. Press the submit ONE TIME, if its larger file just wait abit then refresh page

To use Link buttons:
1. go to Tools tab
2. Press + button
3. Type display name and link WITH (https://google.com) format
4. go back it will be there

how to delete Link:
1. go to Tools tab
2. Press + button
3. Press delete
4. go back all tabs will be gone

-=-=-=-=- Q&A -=-=-=-=-

Q: How to add custom launch option
A: go to ./views/CC.ejs find 93 line (there is a comment "IF U WANT TO ADD MORE INTERPRETERS...") above "</select>" add "<option value="!HERE SHOULD BE UR INTERPRETER!">!NAME!</option>" change !inside shit! to ur chosing for example as value u put python3 cuz in console u would type python3 ./bot.py

Q: Server instantly crashes when i try to run a script
A: This is 99% because u chose wrong loader, or u dont have the loader on pc

Q: Ip adress is undefined and no console output for programs
A: go to ./routes/api.js go to line 33 where comment //IP is. uncomment console.log and restart server, when somebody loads webpage, in server console there should be ip and its array, change (//change this) line in api.js soo it would use the correct array of the printed thing in server console. This should fix console output for programs too

Q: Python code dosen't print to console
A: for Python to print into webserver console u need to import sys and use sys.stdout.flush() to flush print() to webserver

Q: Why it dosent upload file
A: if it IS NOT INT A .ZIP i will just be deleted

Q: Why is the code Garbage
A: As i stated earlier i used this project to learn JavaScript, soo at first i was totally garbage soo yeah some parts are insanly bad to look at, but it does work, somehow...

Q: Will u update this?
A: Depends, if i will want to, this is made for personal use soo i will if i need + dont expect me to answer questions about the code, but i will try if i see some

Q: why is ur English bad?
A: I'm from Lithuania idk how to speak correctly, some of the comments are in Lithuanian too, soo hav fun.

Q: How do i change x ?
A: Large parts of important stuff are commented, soo follow those if u can understand my shit code.

Q: why does Cpu sometimes goes above 100%?
A: idk, it just lies, libary i am using is kinda shit, soo it just does that sometimes.
