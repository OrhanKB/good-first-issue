import { PrismaClient } from '../../generated/prisma/index.js';
import { MappedRepo } from '../github/github.issues.js';

const prisma = new PrismaClient();

export async function saveReposToDatabase(repos: MappedRepo[]) {
    for (const repo of repos) {
        const savedRepo = await prisma.repository.upsert({
            where: {
                repoOwner_repoName: {
                    repoName: repo.repoName,
                    repoOwner: repo.repoOwner
                }
            },
            update: {
                description: repo.description,
                stars: repo.stars,
                language: repo.language,
                lastActivity: repo.lastActivity,
                openIssueCount: repo.openIssueCount
            },
            create: {
                repoName: repo.repoName,
                repoOwner: repo.repoOwner,
                description: repo.description,
                stars: repo.stars,
                language: repo.language,
                lastActivity: repo.lastActivity,
                openIssueCount: repo.openIssueCount
            }
        });
        let savedIssuesCount = 0;
        for (const issue of repo.issues) {
            await prisma.issue.upsert({
                where: {
                    repositoryId_issueNumber: {
                        repositoryId: savedRepo.id,
                        issueNumber: issue.issueNumber,
                    }
                },
                update: {
                    title: issue.title,
                    commentsCount: issue.commentsCount,
                    url: issue.url,
                    labels: issue.labels
                },
                create: {
                    issueNumber: issue.issueNumber,
                    title: issue.title,
                    commentsCount: issue.commentsCount,
                    url: issue.url,
                    labels: issue.labels,
                    repositoryId: savedRepo.id
                }
            });
            savedIssuesCount++;
        }
        console.log("[BAŞARILI] issue sayı:", savedIssuesCount);
    };


}
