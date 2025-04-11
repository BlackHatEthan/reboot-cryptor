# 🔒 reboot-crypter

A Node.js-based AES-256 file encryption script with simulated ransomware behaviour and forced reboot logic.  
This is a **proof-of-concept** project demonstrating file encryption, reboot forcing, and ransomware simulation techniques — all **strictly for educational and ethical hacking purposes**.

---

## ⚙️ Features

- 🔐 AES-256 encryption of all files in target directories
- 🧨 Deletes original unencrypted files
- 📝 Drops a custom ransom note on the user's Desktop
- 🔁 Infinite forced reboot every 30 seconds
- ⚡ Minimal, dependency-free Node.js implementation

---

## 🚨 Disclaimer

> This project is intended **only** for educational purposes and cybersecurity research.  
> Do **not** use this script on systems without **explicit permission**.  
> I do not take any responsibility for misuse of this tool.

---

🧊 Convert to .exe using Replit + pkg

You can turn your script into a Windows executable by using pkg directly in Replit.

✅ Steps:
Install pkg:
npm install -g pkg
Run the build command:
pkg reboot-crypter.js --targets node18-win-x64 --output output.exe
This does the following:

Reads your script (reboot-crypter.js)
Packages it with Node.js runtime
Outputs a Windows .exe named output.exe
✅ Check the result:
On Replit, open the Files tab (left sidebar).
Look for output.exe — if it’s there, success! 🎉
🛠 Troubleshooting:
If output.exe doesn’t appear:

Double-check your command.
Make sure pkg installed without errors.

