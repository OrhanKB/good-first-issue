import axios from 'axios';
import * as cron from 'node-cron';
import { fetchGoodFirstIssues } from '../infrastructure/github/github.issues.js';
import { saveReposToDatabase } from '../infrastructure/database/repo.repository.js';

cron.schedule('*/20 * * * *', async () => {
    console.log("Cron çalıştı, Github'dan veriler çekiliyor...");
    const issues = await fetchGoodFirstIssues();

    if (issues && issues.length > 0) {
        await saveReposToDatabase(issues)

    } else {
        console.log("no issues to save");
    }
});
