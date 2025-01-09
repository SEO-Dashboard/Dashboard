function populateGoogleAnalytics() {
  const gaMetricsDiv = document.getElementById("ga-metrics");
  const metrics = { users: 1200, sessions: 3200, pageviews: 5500 };
  gaMetricsDiv.innerHTML = `
    <p>Users: ${metrics.users}</p>
    <p>Sessions: ${metrics.sessions}</p>
    <p>Pageviews: ${metrics.pageviews}</p>
  `;
}

function populateSearchConsole() {
  const gscMetricsDiv = document.getElementById("search-console-metrics");
  const metrics = { clicks: 500, impressions: 1200, ctr: 42 };
  gscMetricsDiv.innerHTML = `
    <p>Clicks: ${metrics.clicks}</p>
    <p>Impressions: ${metrics.impressions}</p>
    <p>CTR: ${metrics.ctr}%</p>
  `;
}

function populateKeywordRankings() {
  const keywordRankingsList = document.getElementById("keyword-rankings-list");
  const rankings = [
    { position: 1, keyword: 'SEO tools' },
    { position: 5, keyword: 'SEO dashboard' },
    { position: 10, keyword: 'keyword ranking API' }
  ];
  let rankingHTML = "<ul>";
  rankings.forEach(result => {
    rankingHTML += `<li>Rank ${result.position}: ${result.keyword}</li>`;
  });
  rankingHTML += "</ul>";
  keywordRankingsList.innerHTML = rankingHTML;
}

populateGoogleAnalytics();
populateSearchConsole();
populateKeywordRankings();
