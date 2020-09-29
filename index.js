const github = require('@actions/github');

async function run() {
  // Get owner and repo from context of payload that triggered the action
  const { owner, repo } = github.context.repo;

  const octokit = github.getOctokit('TOKEN');

  await octokit.repos.createRelease({owner, repo});
}

function sum(...numbers) {
  return numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}

module.exports = { run, sum }

if (require.main === module) {
  run();
}
