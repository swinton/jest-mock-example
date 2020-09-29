jest.mock('@actions/github');

let github = require('@actions/github');
const { run, sum } = require('./index.js');

describe('run', () => {
  let createRelease;

  beforeEach(() => {
    createRelease = jest.fn();

    github.context.repo = {
      owner: 'owner',
      repo: 'repo',
    };

    const octokit = {
      repos: {
        createRelease
      }
    };

    github.getOctokit.mockImplementation(() => {
      return octokit;
    });
  });

  test('that a release is created', async () => {
    await run();

    expect(createRelease).toHaveBeenCalled();
    expect(createRelease).toHaveBeenCalledWith({owner: 'owner', repo: 'repo'});
  });
});

describe('sum', () => {
  test('numbers are summed', () => {
    expect(sum(1, 1, 1, 1)).toBe(4);
  });
});
