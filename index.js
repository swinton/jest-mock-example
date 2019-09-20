const { GitHub, context } = require('@actions/github');

async function run() {
  // Get owner and repo from context of payload that triggered the action
  const { owner, repo } = context.repo;

  const github = new GitHub('TOKEN');

  await github.repos.createRelease({owner, repo});
}

module.exports = run

if (require.main === module) {
  run();
}
