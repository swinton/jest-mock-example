jest.mock('@actions/github');

let { GitHub, context } = require('@actions/github');
const run = require('./index.js');

describe('module', () => {
  let createRelease;

  beforeEach(() => {
    createRelease = jest.fn();

    context.repo = {
      owner: 'owner',
      repo: 'repo',
    };

    const github = {
      repos: {
        createRelease
      }
    };

    GitHub.mockImplementation(() => {
      return github;
    });
  });

  test('that a release is created', async () => {
    await run();

    expect(createRelease).toHaveBeenCalled();
    expect(createRelease).toHaveBeenCalledWith({owner: 'owner', repo: 'repo'});
  });
})
