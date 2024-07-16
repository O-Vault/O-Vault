# O-Vault Password Manager (Beta)

## Description

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./web/public/o-vault-logo-dark.svg">
  <img  src="./web/public/o-vault-logo-light.svg">
</picture>

O-Vault is a secure Password Manager. It is free and open source. 

O-Vault is a desktop application for:

- Windows
- MacOS
- Linux (not yet available)

O-Vault is fully offline, your passwords are saved locally on your device in an encrypted file called the vault.

With O-Vault you only need to remember one password to open your vault. All your other passwords are saved in your vault.

O-Vault uses a strong and standard encryption algorithm: [SubtleCrypto AES-GCM algorithm](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm). If you are interested to review how the vault is encrypted, this happens [here](https://github.com/O-Vault/O-Vault/blob/main/lib/src/encryption.ts) in the encrypt function. I will be more than happy to get your feedbacks about it on [Discord](https://discord.gg/cgHW3gVsZq).

Your vault is a standalone file, you can make a backup of it on a usb key, to an external harddrive or to your cloud document provider (Google Drive, One Drive, etc).

⚠️ Warning: The app is in "Beta Testing" stage, so it is not ready yet to store actual sensitive passwords.

## Screenshots

<img width="600px" src="./web/public/add.png">

## Download

Here is the link to download the latest version: [Download Page](../../releases/tag/nightly/)

## Feedbacks

If you have any question or feedback, you can reach me on [Discord](https://discord.gg/cgHW3gVsZq).





