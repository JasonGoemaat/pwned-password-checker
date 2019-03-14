const colors = require('colors');
const sha1 = require('sha1');
const readline = require('readline');
const fetch = require('node-fetch');

const check = password => {
    return new Promise(resolve => {
        const hash = sha1(password).toUpperCase();
        const partial = hash.substring(0, 5);
        // console.log('password:', password);
        console.log('sha1:', hash);
        // console.log('partial:', partial);

        let url = `https://api.pwnedpasswords.com/range/${partial}`;
        console.log('url:', url);

        fetch(url)
        .then(response => response.text())
        .then(text => text.split('\r\n'))
        .then(lines => {
            let found = false;
            console.log();
            lines.forEach(line => {
                let [end, count] = line.split(':');
                let complete = partial + end;
                if (complete === hash) {
                    console.log('line:', line);
                    found = true;
                    console.log(`Found ${count} pwnings!`);
                }
            });
            if (!found) {
                console.log('Not found!  You are safe, for now...');
            }
            resolve();
        });
    });
};

/*

*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter a password to check: ', answer => {
    check(answer)
    .then(() => rl.close());
});

// check('Password1')
// .then(() => {
//     console.log('Done!');
// });
