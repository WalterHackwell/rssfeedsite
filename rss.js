const parser = new RSSParser();
const urls = [
  "https://advisories.ncsc.nl/rss/advisories",
  "http://feeds.feedburner.com/TheHackersNews",
  "https://www.darkreading.com/rss.xml"
];
urls.forEach((url, index) => {
  parser.parseURL(url, (err, feed) => {
    if (err) throw err;
    const table = document.querySelector(`#rss-table-${index + 1}`);
    feed.items.forEach(item => {
      const row = table.insertRow();
      const titleCell = row.insertCell();
      titleCell.innerHTML = item.title;
      const descCell = row.insertCell();
      descCell.innerHTML = item.content;
    });
  });
});
