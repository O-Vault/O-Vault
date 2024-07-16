import { aes } from "../index";

const PASSWORD = "password";
const MESSAGE = "hello";

test('encrypt', async () =>  {
    const encrypt = await aes.encrypt(MESSAGE, PASSWORD, false);
    expect(encrypt.length).toBeGreaterThan(0);
});

test('decrypt', async () =>  {
    const encrypt = await aes.encrypt(MESSAGE, PASSWORD, false);
    const outputMessage = await aes.decrypt(encrypt, PASSWORD, false);
    expect(outputMessage).toEqual(MESSAGE);  
});