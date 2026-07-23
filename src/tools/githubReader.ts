/**
 * Utility to read file contents from the GitHub repository using GitHub API.
 */
export async function readGithubFile(owner: string, repo: string, path: string, token: string): Promise<string> {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const response = await fetch(url, {
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3.raw',
      'User-Agent': 'Jarvis-Assistant'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to read file ${path}: ${response.status} ${response.statusText}`);
  }

  return await response.text();
}
