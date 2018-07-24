// Callback aproach
console.log('Before');
getUser(1, getRepoitories);
console.log('After');

function getRepoitories(user) {
  getRepoitories(user.gitHubUsername. getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits)
}

function displayRepositories(repos) {
  console.log(repos);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from the database...');
    callback({ id: id, gitHubUsername: 'nikola' });
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log('Reading commits from the repository...');
    callback({ id: 22, commits: ['commit1', 'commit2'] });
  }, 2000);
}

function getRepoitories(username, callback) {
  setTimeout(() => {
    console.log('Reading users repositories from github...');
    callback({
      username: username,
      repositories: ['repo1', 'repo2', 'repo3']
    });
  }, 2000);
}