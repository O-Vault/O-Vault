import { passwordUtil } from "../index";

test('getRandomValue', async () => {

    let countZero = 0;
    let countOne = 0;
    for (let index = 0; index < 100; index++) {
        const val = passwordUtil.getRandomValue(1);
        if (val === 0) {
            countZero++;
        } else if (val === 1) {
            countOne++;
        } else {
            throw new Error("Failed");
        }
    }
 
    expect(countZero).toBeGreaterThan(0);
    expect(countOne).toBeGreaterThan(0);
});

test('getRandomCharFromList', async () => {

    let randomChar = passwordUtil.getRandomCharFromList('a');
    expect('a'.indexOf(randomChar)).toBeGreaterThanOrEqual(0);
    randomChar = passwordUtil.getRandomCharFromList('ab');
    expect('ab'.indexOf(randomChar)).toBeGreaterThanOrEqual(0);
    randomChar = passwordUtil.getRandomCharFromList('012');
    expect('012'.indexOf(randomChar)).toBeGreaterThanOrEqual(0);
    randomChar = passwordUtil.getRandomCharFromList('\\');
    expect('\\'.indexOf(randomChar)).toBeGreaterThanOrEqual(0);
    randomChar = passwordUtil.getRandomCharFromList(passwordUtil.getRandomCharacter(true, true));
    expect((passwordUtil.LOWERCASE_LETTERS + passwordUtil.UPPERCASE_LETTERS
        + passwordUtil.DIGITS + passwordUtil.SPECIAL_CHARACTERS).indexOf(randomChar)).toBeGreaterThanOrEqual(0);

    let countA = 0;
    let countB = 0;
    for (let index = 0; index < 100; index++) {
        const val = passwordUtil.getRandomCharFromList('ab');
        if (val === 'a') {
            countA++;
        } else if (val === 'b') {
            countB++;
        } else {
            throw new Error("Failed");
        }
    }
 
    expect(countA).toBeGreaterThan(0);
    expect(countB).toBeGreaterThan(0);
});


test('getRandomPasswordWithSeparator', async () => {

    for (let index = 0; index < 100; index++) {
        
        const result = passwordUtil.generateEasyToRememberSecurePassword(16);
        expect(passwordUtil.getPasswordStrengthScore(result)).toBeGreaterThan(90);
    }
    
});

test('findCommonPassword', async () => {
    
    expect(passwordUtil.findCommonPassword("xpass123456y")).toBe('pass123456');
    expect(passwordUtil.findCommonPassword("hello123")).toBe('hello123');
    expect(passwordUtil.findCommonPassword("xyzletmeinabc")).toBe('letmein');
    expect(passwordUtil.findCommonPassword("5s(l9J98K;")).toBe(null);
});

test('extractAllSubWords', async () => {
    
    expect(passwordUtil.extractAllSubWords("123456789",3).length).toBe(7);

});

test('getNumberOfCharTypes', async () => {
    
    expect(passwordUtil.getNumberOfCharTypes("aZB62s")).toBe(3);
    expect(passwordUtil.getNumberOfCharTypes("aZBs")).toBe(2);
    expect(passwordUtil.getNumberOfCharTypes("aZB62s/")).toBe(4);
});