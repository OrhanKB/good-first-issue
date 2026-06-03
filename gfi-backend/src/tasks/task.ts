import axios from 'axios';
import * as cron from 'node-cron';

interface SearchResponse {
    items: {
        repository_url: string;
    }[]
}
interface Labels {
    id: number;
    node_id: string;
    name: string;
    description: any
}

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth().toString().padStart(2, "0");
const day = today.getDate().toString().padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;

// !!! ISSUE URLSINDEN ALINACAKLAR !!!
//issue num ++ (number)
//issue ismi ++ (title)
// issue yorum sayısı ++ (comment)
//issue linki ++(url)
// issue labelleri(labels.name) --> good first issue olup olmadııklarını buradan kontrol edeceğiz


//  !!!REPO URLSİNDEN ALINACAKLAR!!!
//repo owner ismi     -->  (full_name) ++
// repo adı        --/ ++(name)
// repo açıklama (description) ++
// yıldız sayısı (stargazers_count) ++
// dil(ler) (language) ++
// last activity (updated_at) ++
// open issue sayısı(onu biz yapacaz)

async function getRepo() {
    try {
        const response = await axios.get(`https://api.github.com/search/repositories?q=topic:good-first-issue+stars:>20+pushed:>${formattedDate}&sort=updated`, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`
            }
        })
        console.log("response:", response.data.items);
    } catch (error) {
        console.log("error:", error);
    }
}

getRepo();


//cron.schedule('*/20 * * * *', () => {
//    console.log("cron çalıştı");
//    start();
//})
