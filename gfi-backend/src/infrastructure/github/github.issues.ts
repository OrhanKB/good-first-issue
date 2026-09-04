import axios from 'axios';

interface GithubRepo {
    full_name: string;
    name: string;
    description: string | null;
    stargazers_count: number;
    language: string | null;
    updated_at: string;
    issues_url: string;
    open_issues_count: number;
}

interface GithubIssue {
    number: number;
    title: string;
    comments: number;
    html_url: string;
    labels: { name: string }[];
}

export interface MappedIssue {
    issueNumber: number;
    title: string;
    commentsCount: number;
    url: string;
    labels: string[];
}

export interface MappedRepo {
    repoOwner: string;
    repoName: string;
    description: string | null;
    stars: number;
    language: string | null;
    lastActivity: string;
    openIssueCount: number;
    issues: MappedIssue[];
}

const today = new Date();
today.setDate(today.getDate() - 7); // Son 7 gün içindeki repoları almak için tarihi geriye çekiyoruz
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const day = today.getDate().toString().padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;

export async function fetchGoodFirstIssues(): Promise<MappedRepo[] | undefined> {
    try {
        const response = await axios.get<{ items: GithubRepo[] }>(`https://api.github.com/search/repositories?q=topic:good-first-issue+stars:>20+pushed:>${formattedDate}&sort=updated`, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`
            }
        });

        const mappedRepos: MappedRepo[] = await Promise.all(response.data.items.map(async (repo: GithubRepo): Promise<MappedRepo> => {

            let cleanIssuesUrl = repo.issues_url.replace('{/number}', '');
            cleanIssuesUrl += '?state=open&labels=good%20first%20issue';

            let mappedIssues: MappedIssue[] = [];
            try {
                // Her bir repo için kendi issue URL'sine istek
                const issueResponse = await axios.get<GithubIssue[]>(cleanIssuesUrl, {
                    headers: {
                        'Authorization': `Bearer ${process.env.API_KEY}`
                    }
                });

                // Gelen devasa issue array'inden sadece ihtiyacımız olan alanları almak
                mappedIssues = issueResponse.data.map((issue: GithubIssue): MappedIssue => ({
                    issueNumber: issue.number,
                    title: issue.title,
                    commentsCount: issue.comments,
                    url: issue.html_url,
                    labels: issue.labels.map((label) => label.name)
                }));
            } catch (issueErr) {
                console.log(`${repo.name} isimli reponun issueları çekilirken hata oluştu:`, issueErr);
            }

            return {
                repoOwner: repo.full_name,
                repoName: repo.name,
                description: repo.description,
                stars: repo.stargazers_count,
                language: repo.language,
                lastActivity: repo.updated_at,
                openIssueCount: repo.open_issues_count,
                issues: mappedIssues
            };
        }));

        return mappedRepos;
    } catch (err) {
        console.log("error:", err)
    }
};