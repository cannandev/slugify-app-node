# Tiny Slugify App

This is a simple Node.js application that prompts the user for a phrase, then uses the slugify package to return a hyphen (-) delimited string.

It uses the `slugify` npm package. Read the [package documentation]([url](https://www.npmjs.com/package/slugify)).

## Getting started

1. Download and install this app by cloning this repository.
2. Run `npm install` to install all dependencies.
3. Then run `node index.js` to get started!
4. You should see the prompt: `Enter a phrase:`.
5. To test, enter 

```
Hello World! Nice to meet you.
```

This should return the delineated string: `hello-world-nice-to-meet-you`.


Now you can use this string for a URL, or whatever your heart desires.

### Command line usage

As a lazy developer, I use this app from the command line. Add an alias to your shell configuration script. 

I use zshell, so I'd open `~/.zshrc` and add the line:

```
alias slugify='node ~/Sites/slugify-app-node/index.js'
```

Make sure the desintation matches where you cloned the repository.

Open a new shell session and type in `slugify` at the command prompt. Now you can use this application no matter which directory you're in. 

Happy slugging!
