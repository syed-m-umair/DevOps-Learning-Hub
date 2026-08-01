/* ==========================================
   DEVOPS LEARNING HUB
   Linux Page JavaScript
========================================== */


/* ========= COPY COMMAND ========= */
console.log("Linux JS Loaded");
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const terminal = button.parentElement.querySelector(".terminal-content");

        const command = terminal.innerText.trim();

        navigator.clipboard.writeText(command);

        const originalText = button.innerHTML;

        button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';

        setTimeout(() => {

            button.innerHTML = originalText;

        },2000);

    });

});


/* ========= SEARCH COMMANDS ========= */

const searchInput = document.getElementById("searchInput");

const commandCards = document.querySelectorAll(".command-card");

searchInput.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    commandCards.forEach(card=>{

        const text = card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});


/* ========= ACTIVE SIDEBAR ========= */

const sections = document.querySelectorAll("section[id]");

const sidebarLinks = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    sidebarLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

"use strict";

/* ==========================================
   DevOps Learning Hub
   Linux Page JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeSearch();
    initializeCopyButtons();
    initializeSidebar();
    initializeSmoothScroll();

});

function initializeSearch(){

    const searchInput=document.getElementById("searchInput");

    const cards=document.querySelectorAll(".command-card");

    searchInput.addEventListener("input",()=>{

        const value=searchInput.value.toLowerCase().trim();

        cards.forEach(card=>{

            const text=card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }

        });

    });

}

function initializeCopyButtons(){

    const buttons=document.querySelectorAll(".copy-btn");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            const terminal=button
            .parentElement
            .querySelector(".terminal-content");

            const command=terminal.innerText.trim();

            navigator.clipboard.writeText(command);

            const original=button.innerHTML;

            button.innerHTML="<i class='fa-solid fa-check'></i> Copied!";

            setTimeout(()=>{

                button.innerHTML=original;

            },1500);

        });

    });

}

function initializeSidebar(){

    const sections=document.querySelectorAll("section[id]");

    const links=document.querySelectorAll(".sidebar a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-150;

            if(window.scrollY>=top){

                current=section.id;

            }

        });

        links.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}

function initializeSmoothScroll(){

    const links=document.querySelectorAll(".sidebar a");

    links.forEach(link=>{

        link.addEventListener("click",e=>{

            e.preventDefault();

            const target=document.querySelector(
                link.getAttribute("href")
            );

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}


/* ==========================================
   DevOps Learning Hub
   Linux Commands Data
========================================== */

const fileCommands = [

    {
        command: "ls",
        difficulty: "Beginner",
        description: "Lists files and directories.",
        syntax: "ls",
        example: "$ ls",
        tags: ["Files", "Navigation"]
    },

    {
        command: "ls -la",
        difficulty: "Beginner",
        description: "Lists all files including hidden files in long format.",
        syntax: "ls -la",
        example: "$ ls -la",
        tags: ["Files", "Hidden Files"]
    },

    {
        command: "pwd",
        difficulty: "Beginner",
        description: "Displays the current working directory.",
        syntax: "pwd",
        example: "$ pwd",
        tags: ["Directory"]
    },

    {
        command: "cd",
        difficulty: "Beginner",
        description: "Changes the current directory.",
        syntax: "cd folder-name",
        example: "$ cd Documents",
        tags: ["Directory"]
    },

    {
        command: "mkdir",
        difficulty: "Beginner",
        description: "Creates a new directory.",
        syntax: "mkdir project",
        example: "$ mkdir DevOps",
        tags: ["Directory"]
    },

    {
        command: "rmdir",
        difficulty: "Beginner",
        description: "Removes an empty directory.",
        syntax: "rmdir folder-name",
        example: "$ rmdir Test",
        tags: ["Directory"]
    },

    {
        command: "touch",
        difficulty: "Beginner",
        description: "Creates a new empty file.",
        syntax: "touch file.txt",
        example: "$ touch notes.txt",
        tags: ["Files"]
    },

    {
        command: "cp",
        difficulty: "Beginner",
        description: "Copies files or directories.",
        syntax: "cp source destination",
        example: "$ cp file.txt backup.txt",
        tags: ["Files"]
    },

    {
        command: "mv",
        difficulty: "Beginner",
        description: "Moves or renames files and directories.",
        syntax: "mv source destination",
        example: "$ mv old.txt new.txt",
        tags: ["Files"]
    },

    {
        command: "rm",
        difficulty: "Intermediate",
        description: "Deletes files or directories.",
        syntax: "rm file.txt",
        example: "$ rm notes.txt",
        tags: ["Files"]
    }

];

const directoryCommands = [
    {
    category: "Directory Management",
    command: "pwd",
    difficulty: "Beginner",
    description: "Displays the current working directory.",
    syntax: "pwd",
    example: "$ pwd",
    tags: ["Directory"]
},
{
    category: "Directory Management",
    command: "cd",
    difficulty: "Beginner",
    description: "Changes the current directory.",
    syntax: "cd folder",
    example: "$ cd Documents",
    tags: ["Directory"]
},
{
    category: "Directory Management",
    command: "mkdir",
    difficulty: "Beginner",
    description: "Creates a new directory.",
    syntax: "mkdir folder",
    example: "$ mkdir Project",
    tags: ["Directory"]
},
{
    category: "Directory Management",
    command: "rmdir",
    difficulty: "Beginner",
    description: "Removes an empty directory.",
    syntax: "rmdir folder",
    example: "$ rmdir Test",
    tags: ["Directory"]
},
{
    category: "Directory Management",
    command: "tree",
    difficulty: "Intermediate",
    description: "Displays directory structure as a tree.",
    syntax: "tree",
    example: "$ tree",
    tags: ["Directory"]
},
{
    category: "Directory Management",
    command: "pushd",
    difficulty: "Intermediate",
    description: "Saves and changes the current directory.",
    syntax: "pushd folder",
    example: "$ pushd Projects",
    tags: ["Directory"]
},
{
    category: "Directory Management",
    command: "popd",
    difficulty: "Intermediate",
    description: "Returns to the previous directory.",
    syntax: "popd",
    example: "$ popd",
    tags: ["Directory"]
},
{
    category: "Directory Management",
    command: "dirs",
    difficulty: "Intermediate",
    description: "Displays the directory stack.",
    syntax: "dirs",
    example: "$ dirs",
    tags: ["Directory"]
},
{
    category: "Directory Management",
    command: "basename",
    difficulty: "Intermediate",
    description: "Extracts the filename from a path.",
    syntax: "basename /path/file.txt",
    example: "$ basename /home/user/file.txt",
    tags: ["Directory"]
},
{
    category: "Directory Management",
    command: "dirname",
    difficulty: "Intermediate",
    description: "Extracts the directory path.",
    syntax: "dirname /path/file.txt",
    example: "$ dirname /home/user/file.txt",
    tags: ["Directory"]
},
]

const permissionCommands = [

    {
    category: "Permissions",
    command: "chmod",
    difficulty: "Intermediate",
    description: "Changes file permissions.",
    syntax: "chmod 755 file",
    example: "$ chmod 755 script.sh",
    tags: ["Permissions"]
},
{
    category: "Permissions",
    command: "chown",
    difficulty: "Advanced",
    description: "Changes file ownership.",
    syntax: "chown user file",
    example: "$ sudo chown umair file.txt",
    tags: ["Permissions"]
},
{
    category: "Permissions",
    command: "chgrp",
    difficulty: "Advanced",
    description: "Changes group ownership.",
    syntax: "chgrp group file",
    example: "$ chgrp developers app",
    tags: ["Permissions"]
},
{
    category: "Permissions",
    command: "umask",
    difficulty: "Advanced",
    description: "Sets default file permissions.",
    syntax: "umask 022",
    example: "$ umask 022",
    tags: ["Permissions"]
},
{
    category: "Permissions",
    command: "stat",
    difficulty: "Intermediate",
    description: "Displays detailed file information.",
    syntax: "stat file",
    example: "$ stat notes.txt",
    tags: ["Permissions"]
},
{
    category: "Permissions",
    command: "getfacl",
    difficulty: "Advanced",
    description: "Shows file access control lists.",
    syntax: "getfacl file",
    example: "$ getfacl script.sh",
    tags: ["Permissions"]
},
{
    category: "Permissions",
    command: "setfacl",
    difficulty: "Advanced",
    description: "Sets access control lists.",
    syntax: "setfacl options file",
    example: "$ setfacl -m u:user:rwx file",
    tags: ["Permissions"]
},
{
    category: "Permissions",
    command: "ls -l",
    difficulty: "Beginner",
    description: "Displays permissions in long format.",
    syntax: "ls -l",
    example: "$ ls -l",
    tags: ["Permissions"]
},
{
    category: "Permissions",
    command: "sudo",
    difficulty: "Beginner",
    description: "Runs a command with elevated privileges.",
    syntax: "sudo command",
    example: "$ sudo apt update",
    tags: ["Permissions"]
},
{
    category: "Permissions",
    command: "id",
    difficulty: "Beginner",
    description: "Displays user and group IDs.",
    syntax: "id",
    example: "$ id",
    tags: ["Permissions"]
},
]

const processCommands = [

    {
    category: "Process Management",
    command: "ps",
    difficulty: "Beginner",
    description: "Displays running processes.",
    syntax: "ps",
    example: "$ ps",
    tags: ["Processes"]
},
{
    category: "Process Management",
    command: "top",
    difficulty: "Beginner",
    description: "Shows real-time system processes.",
    syntax: "top",
    example: "$ top",
    tags: ["Processes"]
},
{
    category: "Process Management",
    command: "htop",
    difficulty: "Intermediate",
    description: "Interactive process viewer.",
    syntax: "htop",
    example: "$ htop",
    tags: ["Processes"]
},
{
    category: "Process Management",
    command: "kill",
    difficulty: "Intermediate",
    description: "Terminates a process by PID.",
    syntax: "kill PID",
    example: "$ kill 1234",
    tags: ["Processes"]
},
{
    category: "Process Management",
    command: "killall",
    difficulty: "Intermediate",
    description: "Terminates processes by name.",
    syntax: "killall process",
    example: "$ killall firefox",
    tags: ["Processes"]
},
{
    category: "Process Management",
    command: "jobs",
    difficulty: "Intermediate",
    description: "Lists background jobs.",
    syntax: "jobs",
    example: "$ jobs",
    tags: ["Processes"]
},
{
    category: "Process Management",
    command: "bg",
    difficulty: "Intermediate",
    description: "Runs a stopped job in the background.",
    syntax: "bg",
    example: "$ bg",
    tags: ["Processes"]
},
{
    category: "Process Management",
    command: "fg",
    difficulty: "Intermediate",
    description: "Brings a background job to the foreground.",
    syntax: "fg",
    example: "$ fg",
    tags: ["Processes"]
},
{
    category: "Process Management",
    command: "nice",
    difficulty: "Advanced",
    description: "Starts a process with modified priority.",
    syntax: "nice command",
    example: "$ nice -n 10 program",
    tags: ["Processes"]
},
{
    category: "Process Management",
    command: "renice",
    difficulty: "Advanced",
    description: "Changes the priority of a running process.",
    syntax: "renice priority PID",
    example: "$ renice 5 1234",
    tags: ["Processes"]
},
]

const networkCommands = [


]

/* ==========================================
   Render Commands
========================================== */

const container = document.getElementById("fileCommands");

fileCommands.forEach(command => {

    const badgeClass = command.difficulty.toLowerCase();

    container.innerHTML += `

    <div class="command-card">

        <div class="command-header">

            <h3 class="command-title">${command.command}</h3>

            <span class="badge ${badgeClass}">
                ${command.difficulty}
            </span>

        </div>

        <p class="command-description">

            ${command.description}

        </p>

        <h4 class="command-label">

            Syntax

        </h4>

        <div class="terminal-box">

            <div class="terminal-top">

                <span class="circle red"></span>

                <span class="circle yellow"></span>

                <span class="circle green"></span>

            </div>

            <div class="terminal-content">

${command.syntax}

            </div>

        </div>

        <h4 class="command-label">

            Example

        </h4>

        <div class="terminal-box">

            <div class="terminal-top">

                <span class="circle red"></span>

                <span class="circle yellow"></span>

                <span class="circle green"></span>

            </div>

            <div class="terminal-content">

${command.example}

            </div>

        </div>

        <button class="copy-btn">

            <i class="fa-regular fa-copy"></i>

            Copy Command

        </button>

        <div class="command-tags">

            ${command.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}

        </div>

    </div>

    `;

});

const container = document.getElementById("directoryCommands");

fileCommands.forEach(command => {

    const badgeClass = command.difficulty.toLowerCase();

    container.innerHTML += `

    <div class="command-card">

        <div class="command-header">

            <h3 class="command-title">${command.command}</h3>

            <span class="badge ${badgeClass}">
                ${command.difficulty}
            </span>

        </div>

        <p class="command-description">

            ${command.description}

        </p>

        <h4 class="command-label">

            Syntax

        </h4>

        <div class="terminal-box">

            <div class="terminal-top">

                <span class="circle red"></span>

                <span class="circle yellow"></span>

                <span class="circle green"></span>

            </div>

            <div class="terminal-content">

${command.syntax}

            </div>

        </div>

        <h4 class="command-label">

            Example

        </h4>

        <div class="terminal-box">

            <div class="terminal-top">

                <span class="circle red"></span>

                <span class="circle yellow"></span>

                <span class="circle green"></span>

            </div>

            <div class="terminal-content">

${command.example}

            </div>

        </div>

        <button class="copy-btn">

            <i class="fa-regular fa-copy"></i>

            Copy Command

        </button>

        <div class="command-tags">

            ${command.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}

        </div>

    </div>

    `;

});