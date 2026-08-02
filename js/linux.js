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


/* ========= SEARCH COMMANDS =========

   Runs after renderCommands() has already populated the page (this file
   calls renderCommands() synchronously before the DOMContentLoaded event
   fires, so by the time this runs every .command-card already exists in
   the DOM).

   Uses textContent instead of innerText: innerText depends on the CSS
   render tree and can return empty/undefined results for freshly
   injected content, which was silently breaking the filter. textContent
   has no such dependency and always reflects the actual text.
*/

function initializeSearch() {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    const sections = document.querySelectorAll(".content > section[id]");

    searchInput.addEventListener("input", () => {

        const value = searchInput.value.toLowerCase().trim();

        sections.forEach(section => {

            const cards = section.querySelectorAll(".command-card");
            let sectionHasMatch = false;

            cards.forEach(card => {

                const text = card.textContent.toLowerCase();
                const matches = value === "" || text.includes(value);

                card.style.display = matches ? "block" : "none";

                if (matches) sectionHasMatch = true;

            });

            // Hide a category's heading too when none of its cards match,
            // instead of leaving an empty "Permissions" title floating
            // above nothing.
            section.style.display = sectionHasMatch ? "" : "none";

        });

    });

}


/* ========= COPY COMMAND ========= */

function initializeCopyButtons() {

    const buttons = document.querySelectorAll(".copy-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const terminal = button
                .parentElement
                .querySelector(".terminal-content");

            const command = terminal.textContent.trim();

            navigator.clipboard.writeText(command);

            const original = button.innerHTML;

            button.innerHTML = "<i class='fa-solid fa-check'></i> Copied!";

            setTimeout(() => {

                button.innerHTML = original;

            }, 1500);

        });

    });

}


/* ========= ACTIVE SIDEBAR ========= */

function initializeSidebar() {

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".sidebar a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            if (window.scrollY >= top) {
                current = section.id;
            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

}


/* ========= SMOOTH SCROLL ========= */

function initializeSmoothScroll() {

    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }

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
    syntax: "cd folder",
    example: "$ cd Documents",
    tags: ["Directory"]
},
{
    command: "mkdir",
    difficulty: "Beginner",
    description: "Creates a new directory.",
    syntax: "mkdir folder",
    example: "$ mkdir Project",
    tags: ["Directory"]
},
{
    command: "rmdir",
    difficulty: "Beginner",
    description: "Removes an empty directory.",
    syntax: "rmdir folder",
    example: "$ rmdir Test",
    tags: ["Directory"]
},
{
    command: "tree",
    difficulty: "Intermediate",
    description: "Displays directory structure as a tree.",
    syntax: "tree",
    example: "$ tree",
    tags: ["Directory"]
},
{
    command: "pushd",
    difficulty: "Intermediate",
    description: "Saves and changes the current directory.",
    syntax: "pushd folder",
    example: "$ pushd Projects",
    tags: ["Directory"]
},
{
    command: "popd",
    difficulty: "Intermediate",
    description: "Returns to the previous directory.",
    syntax: "popd",
    example: "$ popd",
    tags: ["Directory"]
},
{
    command: "dirs",
    difficulty: "Intermediate",
    description: "Displays the directory stack.",
    syntax: "dirs",
    example: "$ dirs",
    tags: ["Directory"]
},
{
    command: "basename",
    difficulty: "Intermediate",
    description: "Extracts the filename from a path.",
    syntax: "basename /path/file.txt",
    example: "$ basename /home/user/file.txt",
    tags: ["Directory"]
},
{
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

{
    category: "Networking",
    command: "ping",
    difficulty: "Beginner",
    description: "Tests connectivity to another host by sending ICMP echo requests.",
    syntax: "ping hostname",
    example: "$ ping google.com",
    tags: ["Network", "Connectivity"]
},

{
    category: "Networking",
    command: "ip",
    difficulty: "Beginner",
    description: "Displays and manages network interfaces, IP addresses, and routes.",
    syntax: "ip addr",
    example: "$ ip addr",
    tags: ["IP", "Interfaces"]
},

{
    category: "Networking",
    command: "ifconfig",
    difficulty: "Intermediate",
    description: "Displays and configures network interfaces (legacy command).",
    syntax: "ifconfig",
    example: "$ ifconfig",
    tags: ["Legacy", "Interfaces"]
},

{
    category: "Networking",
    command: "netstat",
    difficulty: "Intermediate",
    description: "Displays network connections, routing tables, and interface statistics.",
    syntax: "netstat -tuln",
    example: "$ netstat -tuln",
    tags: ["Ports", "Connections"]
},

{
    category: "Networking",
    command: "ss",
    difficulty: "Intermediate",
    description: "Shows socket statistics and active network connections.",
    syntax: "ss -tuln",
    example: "$ ss -tuln",
    tags: ["Sockets", "Ports"]
},

{
    category: "Networking",
    command: "traceroute",
    difficulty: "Intermediate",
    description: "Displays the route packets take to reach a destination.",
    syntax: "traceroute hostname",
    example: "$ traceroute google.com",
    tags: ["Routing", "Diagnostics"]
},

{
    category: "Networking",
    command: "curl",
    difficulty: "Beginner",
    description: "Transfers data to or from a server using supported protocols.",
    syntax: "curl URL",
    example: "$ curl https://google.com",
    tags: ["HTTP", "API"]
},

{
    category: "Networking",
    command: "wget",
    difficulty: "Beginner",
    description: "Downloads files from the web using HTTP, HTTPS, or FTP.",
    syntax: "wget URL",
    example: "$ wget https://example.com/file.zip",
    tags: ["Download", "HTTP"]
},

{
    category: "Networking",
    command: "ssh",
    difficulty: "Intermediate",
    description: "Securely connects to a remote Linux machine.",
    syntax: "ssh user@host",
    example: "$ ssh ubuntu@192.168.1.100",
    tags: ["Remote", "SSH"]
},

{
    category: "Networking",
    command: "scp",
    difficulty: "Intermediate",
    description: "Securely copies files between local and remote systems.",
    syntax: "scp source destination",
    example: "$ scp file.txt ubuntu@192.168.1.100:/home/ubuntu/",
    tags: ["SSH", "File Transfer"]
}
];

const diskCommands = [

{
    category: "Disk Management",
    command: "df",
    difficulty: "Beginner",
    description: "Displays disk space usage of mounted file systems.",
    syntax: "df -h",
    example: "$ df -h",
    tags: ["Disk", "Storage"]
},

{
    category: "Disk Management",
    command: "du",
    difficulty: "Beginner",
    description: "Shows the disk usage of files and directories.",
    syntax: "du -sh directory",
    example: "$ du -sh Downloads",
    tags: ["Disk", "Usage"]
},

{
    category: "Disk Management",
    command: "lsblk",
    difficulty: "Intermediate",
    description: "Lists information about block devices such as disks and partitions.",
    syntax: "lsblk",
    example: "$ lsblk",
    tags: ["Disks", "Partitions"]
},

{
    category: "Disk Management",
    command: "fdisk",
    difficulty: "Advanced",
    description: "Creates, deletes, and manages disk partitions.",
    syntax: "sudo fdisk /dev/sda",
    example: "$ sudo fdisk /dev/sda",
    tags: ["Partition", "Disk"]
},

{
    category: "Disk Management",
    command: "mount",
    difficulty: "Intermediate",
    description: "Mounts a file system to a specified directory.",
    syntax: "mount device mount_point",
    example: "$ sudo mount /dev/sdb1 /mnt",
    tags: ["Mount", "Filesystem"]
},

{
    category: "Disk Management",
    command: "umount",
    difficulty: "Intermediate",
    description: "Unmounts a mounted file system.",
    syntax: "umount mount_point",
    example: "$ sudo umount /mnt",
    tags: ["Unmount", "Filesystem"]
},

{
    category: "Disk Management",
    command: "blkid",
    difficulty: "Intermediate",
    description: "Displays block device UUIDs and filesystem information.",
    syntax: "blkid",
    example: "$ sudo blkid",
    tags: ["UUID", "Filesystem"]
},

{
    category: "Disk Management",
    command: "mkfs",
    difficulty: "Advanced",
    description: "Creates a new filesystem on a partition or disk.",
    syntax: "mkfs.ext4 /dev/sdb1",
    example: "$ sudo mkfs.ext4 /dev/sdb1",
    tags: ["Filesystem", "Format"]
},

{
    category: "Disk Management",
    command: "fsck",
    difficulty: "Advanced",
    description: "Checks and repairs Linux file systems.",
    syntax: "fsck /dev/sdb1",
    example: "$ sudo fsck /dev/sdb1",
    tags: ["Filesystem", "Repair"]
},

{
    category: "Disk Management",
    command: "parted",
    difficulty: "Advanced",
    description: "Creates and modifies disk partition tables.",
    syntax: "parted /dev/sda",
    example: "$ sudo parted /dev/sda",
    tags: ["Partition", "Disk"]
}

];

const packageCommands = [

{
    category: "Package Management",
    command: "apt update",
    difficulty: "Beginner",
    description: "Updates the package list from configured repositories.",
    syntax: "sudo apt update",
    example: "$ sudo apt update",
    tags: ["APT", "Update"]
},

{
    category: "Package Management",
    command: "apt upgrade",
    difficulty: "Beginner",
    description: "Upgrades all installed packages to their latest available versions.",
    syntax: "sudo apt upgrade",
    example: "$ sudo apt upgrade",
    tags: ["APT", "Upgrade"]
},

{
    category: "Package Management",
    command: "apt install",
    difficulty: "Beginner",
    description: "Installs one or more software packages.",
    syntax: "sudo apt install package-name",
    example: "$ sudo apt install nginx",
    tags: ["APT", "Install"]
},

{
    category: "Package Management",
    command: "apt remove",
    difficulty: "Beginner",
    description: "Removes an installed package while keeping configuration files.",
    syntax: "sudo apt remove package-name",
    example: "$ sudo apt remove nginx",
    tags: ["APT", "Remove"]
},

{
    category: "Package Management",
    command: "apt purge",
    difficulty: "Intermediate",
    description: "Removes a package along with its configuration files.",
    syntax: "sudo apt purge package-name",
    example: "$ sudo apt purge nginx",
    tags: ["APT", "Purge"]
},

{
    category: "Package Management",
    command: "apt autoremove",
    difficulty: "Beginner",
    description: "Removes unused dependencies that are no longer required.",
    syntax: "sudo apt autoremove",
    example: "$ sudo apt autoremove",
    tags: ["APT", "Cleanup"]
},

{
    category: "Package Management",
    command: "apt search",
    difficulty: "Beginner",
    description: "Searches for packages in the configured repositories.",
    syntax: "apt search keyword",
    example: "$ apt search docker",
    tags: ["APT", "Search"]
},

{
    category: "Package Management",
    command: "apt show",
    difficulty: "Beginner",
    description: "Displays detailed information about a package.",
    syntax: "apt show package-name",
    example: "$ apt show git",
    tags: ["APT", "Information"]
},

{
    category: "Package Management",
    command: "dpkg -i",
    difficulty: "Intermediate",
    description: "Installs a local .deb package manually.",
    syntax: "sudo dpkg -i package.deb",
    example: "$ sudo dpkg -i vscode.deb",
    tags: ["DPKG", "Install"]
},

{
    category: "Package Management",
    command: "dpkg -l",
    difficulty: "Intermediate",
    description: "Lists all installed packages on the system.",
    syntax: "dpkg -l",
    example: "$ dpkg -l",
    tags: ["DPKG", "Installed Packages"]
}

];

const userCommands = [

{
    category: "User Management",
    command: "whoami",
    difficulty: "Beginner",
    description: "Displays the username of the current logged-in user.",
    syntax: "whoami",
    example: "$ whoami",
    tags: ["User", "Identity"]
},

{
    category: "User Management",
    command: "id",
    difficulty: "Beginner",
    description: "Displays user ID (UID), group ID (GID), and group memberships.",
    syntax: "id",
    example: "$ id",
    tags: ["User", "Groups"]
},

{
    category: "User Management",
    command: "users",
    difficulty: "Beginner",
    description: "Shows the usernames of users currently logged in.",
    syntax: "users",
    example: "$ users",
    tags: ["User", "Login"]
},

{
    category: "User Management",
    command: "groups",
    difficulty: "Beginner",
    description: "Displays the groups that the current user belongs to.",
    syntax: "groups",
    example: "$ groups",
    tags: ["Groups"]
},

{
    category: "User Management",
    command: "passwd",
    difficulty: "Beginner",
    description: "Changes the password for a user account.",
    syntax: "passwd",
    example: "$ passwd",
    tags: ["Password", "Security"]
},

{
    category: "User Management",
    command: "useradd",
    difficulty: "Intermediate",
    description: "Creates a new user account.",
    syntax: "sudo useradd username",
    example: "$ sudo useradd devuser",
    tags: ["User", "Create"]
},

{
    category: "User Management",
    command: "usermod",
    difficulty: "Intermediate",
    description: "Modifies an existing user account.",
    syntax: "sudo usermod options username",
    example: "$ sudo usermod -aG sudo devuser",
    tags: ["User", "Modify"]
},

{
    category: "User Management",
    command: "userdel",
    difficulty: "Intermediate",
    description: "Deletes a user account.",
    syntax: "sudo userdel username",
    example: "$ sudo userdel devuser",
    tags: ["User", "Delete"]
},

{
    category: "User Management",
    command: "su",
    difficulty: "Intermediate",
    description: "Switches to another user account.",
    syntax: "su username",
    example: "$ su root",
    tags: ["User", "Switch"]
},

{
    category: "User Management",
    command: "sudo",
    difficulty: "Beginner",
    description: "Executes a command with superuser privileges.",
    syntax: "sudo command",
    example: "$ sudo apt update",
    tags: ["Admin", "Privilege"]
}

];

const shellCommands = [

{
    category: "Shell",
    command: "echo",
    difficulty: "Beginner",
    description: "Prints text or variable values to the terminal.",
    syntax: "echo text",
    example: "$ echo Hello World",
    tags: ["Shell", "Output"]
},

{
    category: "Shell",
    command: "history",
    difficulty: "Beginner",
    description: "Displays previously executed commands.",
    syntax: "history",
    example: "$ history",
    tags: ["History"]
},

{
    category: "Shell",
    command: "clear",
    difficulty: "Beginner",
    description: "Clears the terminal screen.",
    syntax: "clear",
    example: "$ clear",
    tags: ["Terminal"]
},

{
    category: "Shell",
    command: "alias",
    difficulty: "Intermediate",
    description: "Creates shortcuts for frequently used commands.",
    syntax: "alias name='command'",
    example: "$ alias ll='ls -la'",
    tags: ["Alias", "Shell"]
},

{
    category: "Shell",
    command: "unalias",
    difficulty: "Intermediate",
    description: "Removes an existing alias.",
    syntax: "unalias alias-name",
    example: "$ unalias ll",
    tags: ["Alias"]
},

{
    category: "Shell",
    command: "export",
    difficulty: "Intermediate",
    description: "Sets environment variables for the current shell session.",
    syntax: "export VARIABLE=value",
    example: "$ export JAVA_HOME=/usr/lib/jvm/java-17",
    tags: ["Environment"]
},

{
    category: "Shell",
    command: "env",
    difficulty: "Intermediate",
    description: "Displays all environment variables.",
    syntax: "env",
    example: "$ env",
    tags: ["Environment"]
},

{
    category: "Shell",
    command: "source",
    difficulty: "Intermediate",
    description: "Executes commands from a file in the current shell.",
    syntax: "source filename",
    example: "$ source ~/.bashrc",
    tags: ["Shell", "Configuration"]
},

{
    category: "Shell",
    command: "bash",
    difficulty: "Intermediate",
    description: "Starts a new Bash shell session.",
    syntax: "bash",
    example: "$ bash",
    tags: ["Bash"]
},

{
    category: "Shell",
    command: "exit",
    difficulty: "Beginner",
    description: "Closes the current shell session.",
    syntax: "exit",
    example: "$ exit",
    tags: ["Shell", "Terminal"]
}

];


/* ==========================================
   Render Commands
========================================== */

function renderCommands(commandsArray, containerId) {

    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container '${containerId}' not found.`);
        return;
    }

    container.innerHTML = "";

    commandsArray.forEach(command => {

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

            <h4 class="command-label">Syntax</h4>

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

            <h4 class="command-label">Example</h4>

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

                ${command.tags
                    .map(tag => `<span class="tag">${tag}</span>`)
                    .join("")}

            </div>

        </div>

        `;

    });

}

renderCommands(fileCommands, "fileCommands");
renderCommands(directoryCommands, "directoryCommands");
renderCommands(permissionCommands, "permissionCommands");
renderCommands(processCommands, "processCommands");
renderCommands(networkCommands, "networkCommands");
renderCommands(diskCommands, "diskCommands");
renderCommands(packageCommands, "packageCommands");
renderCommands(userCommands, "userCommands");
renderCommands(shellCommands, "shellCommands");