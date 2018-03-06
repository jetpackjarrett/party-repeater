const [_, __, amount, str = "🎉"] = process.argv;
const { exec } = require("child_process");

const out = str.repeat(100);
exec(`echo ${out}  | pbcopy`, function(...args) {
  process.stdout.write(`Copied: ${out} to clipboard\n`);
});
