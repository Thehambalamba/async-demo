// Promises aproach
console.log('Before');
getUser(1)
.then(user => getRepoitories(user.gitHubUsername))
.then(repos => getCommits(repos[0]))
.then(commits => console.log('Commits', commits))
.catch(err => console.log('Error', err.message));

function getUser(id) {
  return new Promise ((resolve, reject) => {
    // Start async work
    setTimeout(() => {
      console.log('Reading a user from the database...');
      resolve({ id: id, gitHubUsername: 'nikola' });
    }, 2000);
  });
  
}
console.log('After');

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading commits from the repository...');
      resolve(['commit1', 'commit2']);
    }, 2000);
  });
}

function getRepoitories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading users repositories from github...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}