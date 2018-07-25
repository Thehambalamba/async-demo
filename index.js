// Async and await aproach
console.log('Before');

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepoitories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log('Error', err.message);
  }
}
displayCommits();

console.log('After');

function getUser(id) {
  return new Promise ((resolve, reject) => {
    // Start async work
    setTimeout(() => {
      console.log('Reading a user from the database...');
      resolve({ id: id, gitHubUsername: 'nikola' });
    }, 2000);
  });
  
}

function getRepoitories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading users repositories from github...');
      // resolve(['repo1', 'repo2', 'repo3']);
      reject(new Error('Could not get the repos.'));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading commits from the repository...');
      resolve(['commit1', 'commit2']);
    }, 2000);
  });
}