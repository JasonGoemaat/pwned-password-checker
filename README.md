[haveibeenpwned](https://haveibeenpwned.com/) is a website that collects
hashed accounts and lets you check if your account is in any of the lists.

You can check if any of your passwords appear in their lists, but who
wants to send their sensitive passwords to a website?

Thankfully they offer a free api that lets you check.  For security,
you give them the first 5 characters of the sha1 hash of some text
you want to check.  They return you a list of sha1 hashes (~550 for each
which means about 500 million passwords) along with how many times they
appear in their lists.

This app lets you type in a password and it calls their api and tells you
if the hash of your password appears in their lists.

## Running

After cloning, run 'npm install' or 'yarn' to download the dependencies, 
then run 'node index'.  Sample:

    $ node index
    Enter a password to check: Password1
    sha1: 70CCD9007338D6D81DD3B6271621B9CF9A97EA00
    url: https://api.pwnedpasswords.com/range/70CCD

    line: 9007338D6D81DD3B6271621B9CF9A97EA00:111658
    Found 111658 pwnings!
