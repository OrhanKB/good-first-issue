import axios from 'axios';
import * as cron from 'node-cron';
import { fetchGoodFirstIssues } from '../infrastructure/github/github.issues.js';

cron.schedule('*/20 * * * *', async () => {
    console.log("Cron works, fetching data from Github");
    const issues = await fetchGoodFirstIssues();


});
