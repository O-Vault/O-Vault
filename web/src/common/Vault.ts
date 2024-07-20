export class Vault {

    name: string;
    items: VaultItem[];

    constructor() {
        this.items = [];
    }

}

export class VaultItem {

    id: string;
    name: string;
    username: string;
    password: string;
    url: string;
    paletteIndex: number;
    constructor() {

    }

}

