/* eslint-disable no-undef */
'use strict';
import * as builder from 'electron-builder';
const Platform = builder.Platform;

const platform = process.argv[2];
if (platform === undefined || platform === '') {
    console.log('Error: First argument is missing, expected --win or --mac');
    process.exit(1);
}

const targets = process.argv.slice(3).length > 0 ? process.argv.slice(3) : undefined;

/** @type {builder.Configuration} */
const options = {

    appId: 'org.o-vault.app',
    productName: 'O-Vault',
    asar: true,
    directories: {
        output: '../dist',
        buildResources: 'resources'
    },
    files: [
        "!**/*",
        "images/",
        "node_modules/o-vault-lib/dist/",
        "!node_modules/o-vault-lib/dist/tests",
        "js/",
        "web/",
        "!**/*.map",
      ],
    icon: 'resources/icons/png',
    win: {
        target: targets || ['portable', 'zip', 'nsis'],
        artifactName: '${productName}-${version}.${arch}.${os}.${ext}',
        icon: 'resources/icons/png',
    },
    portable: {
        artifactName: '${productName}-${version}.${arch}.${os}.portable.${ext}',
    },
    nsis: {
        artifactName: '${productName}-${version}.${arch}.${os}.nsis.${ext}',
    },
    mac: {
        artifactName: '${productName}-${version}.${arch}.${os}.${ext}',
        icon: 'resources/icons/png',
        target: targets || [
            {
                target: 'zip',
                arch: ['x64', 'arm64']
            }
        ],
    },
};

let target;
if (platform === '--mac') {
    target = Platform.MAC.createTarget();
    options.win = undefined;
} else {
    target = Platform.WINDOWS.createTarget();
    options.mac = undefined;
}

builder.build({
    targets: target,
    config: options
}).then(() => {
    console.log('DONE');
}).catch((error) => {
    console.error(error);
});