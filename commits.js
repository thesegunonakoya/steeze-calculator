const simpleGit = require('simple-git');
const fs = require('fs');
const path = require('path');

const git = simpleGit();
const filePath = path.join(__dirname, 'new.html');

const startDate = new Date(2024, 5, 9);
const endDate = new Date(2024, 6, 13); 

const generateRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const generateRandomTime = (date) => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
    date.setHours(hours, minutes, seconds);
    return new Date(date);
};

const createCommit = async (date) => {
    const commitMessage = `update for ${date.toISOString()}`;
    fs.appendFileSync(filePath, `${commitMessage}\n`);
    await git.add(filePath);
    await git.commit(commitMessage, filePath, { '--date': date.toISOString() });
};

const pushCommits = async () => {
    await git.push('origin', 'main');
};

const makeCommits = async () => {
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const numCommits = Math.floor(Math.random() * 5) + 1;
        for (let i = 0; i < numCommits; i++) {
            const date = generateRandomTime(new Date(currentDate));
            await createCommit(date);
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    await pushCommits();
};

makeCommits().then(() => {
    console.log('Commits created and pushed successfully.');
}).catch((err) => {
    console.error('Error creating commits:', err);
});

// npm init -y
// npm install simple-git