/* eslint-disable no-undef */
'use strict';
import * as builder from 'electron-builder';
const Platform = builder.Platform;

import { SignTool } from './codesign.mjs';

const platform = process.argv[2];
if (platform === undefined || platform === '') {
    console.log('Error: First argument is missing, expected --win, --mac or --linux');
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
        target: targets || ['zip', 'nsis'],
        artifactName: '${productName}-${version}.${arch}.${os}.${ext}',
        icon: 'resources/icons/png',
        sign: SignTool
    },
    nsis: {
        artifactName: '${productName}-${version}.${arch}.${os}.${ext}'
    },
    linux: {
        target: targets || ['AppImage', 'deb', 'snap', 'rpm'],
        artifactName: '${productName}-${version}.${arch}.linux.${ext}',
        icon: 'resources/icons/png',
        category:'Utility'
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
    options.linux = undefined;
} else if (platform === '--win') {
    target = Platform.WINDOWS.createTarget();
    options.mac = undefined;
    options.linux = undefined;
} else {
    target = Platform.LINUX.createTarget();
    options.mac = undefined;
    options.win = undefined;
}

builder.build({
    targets: target,
    config: options
}).then(() => {
    console.log('DONE');
}).catch((error) => {
    console.error(error);
});