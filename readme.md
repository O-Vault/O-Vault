![Build App](https://github.com/O-Vault/O-Vault/actions/workflows/build-app.yml/badge.svg)

# O-Vault Password Manager

## Description

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./web/public/o-vault-logo-dark.svg">
  <img  src="./web/public/o-vault-logo-light.svg">
</picture>

O-Vault is a secure Password Manager. It is free and open source. 

O-Vault is a desktop application for:

- Windows
- MacOS
- Linux

O-Vault is fully offline, your passwords are saved locally on your device in an encrypted file called the vault.

With O-Vault you only need to remember one password to open your vault. All your other passwords are saved in your vault.

O-Vault uses the Chromium implementation of the [Web Crypto API](https://www.chromium.org/blink/webcrypto/) and more specifically it encrypts the vault using the [Rijndael AES-GCM](https://w3c.github.io/webcrypto/#aes-gcm) algorithm. 

As stated on [www.cryptomathic.com](https://www.cryptomathic.com/):

> AES is the symmetric algorithm of choice for most applications today, and it is widely used, typically with 128 or 256-bit keys, the latter of which is considered strong enough to protect military TOP SECRET data. It is worth noting that, assuming no known flaws in an algorithm, brute forcing a single 128-bit key will take billions of years using any classical computing technology available today or in the foreseeable future.

Your vault is a standalone file, you can make a backup of it on a usb key, to an external harddrive or to your cloud document provider (Google Drive, One Drive, etc).

## Screenshots

<img width="600px" src="./web/public/add.png">

## Download

Here is the link to download the latest stable version: [Download Page](https://github.com/O-Vault/O-Vault/releases/latest)

## Feedbacks

- To log an issue or enhancement ticket, follow this [link](https://github.com/O-Vault/O-Vault/issues)
- Or you can share your thoughs in the [Discussions page](https://github.com/O-Vault/O-Vault/discussions)

## Manifesto

### Offline

O-Vault is an «Offline» Password Manager. It means the vault is stored on the user device, it takes the form of an encrypted file. There is no «cloud» where the vault is sync and there will never be. There is also no need to create an account to use the app.

### Secure

Security is the **number one priority** and will always be. Even if security is taken very seriously, a user should have the choice to enable or not the highest level of security. For example, a user should be able to use a weak password to protect his vault if this is what he wants but in this case he needs to know that his vault is vulnerable. 

## Source code

The source code is on [github](https://github.com/O-Vault/O-Vault/).

## Author

Nicolas Puzin aka [end3rbyte](https://github.com/end3rbyte).

## License

[MIT](https://github.com/O-Vault/O-Vault/blob/main/LICENSE)







