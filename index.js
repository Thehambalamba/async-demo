// Async
console.log('Before');
getUser(1, (user) => {
  getRepoitories(user.gitHubUsername, (repos) => {
    getCommits(repo, (commits) => {
      // Callback hell
    });
  });
});
console.log('After');

// Synchronous
console.log('Before');
const user = getUser(1);
const repos = getRepoitories(user.gitHubUsername);
const repos = getCommits(user.gitHubUsername, );
console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from the database...');
    callback({ id: id, gitHubUsername: 'nikola' });
  }, 2000);
}

function getRepoitories(username, callback) {
  setTimeout(() => {
    console.log('Reading users repositories from the database...');
    callback({
      username: username,
      repositories: ['repo1', 'repo2', 'repo3']
    });
  }, 2000);
}