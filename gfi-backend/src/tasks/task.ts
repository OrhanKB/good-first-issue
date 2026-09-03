import * as cron from 'node-cron';


cron.schedule('*/20 * * * *', async () => {
    console.log("Cron works, fetching data from Github");
})
