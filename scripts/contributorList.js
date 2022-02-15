var repositoryURL = "https://api.github.com/repos/CerritusCodersComm/myFirstOpenSourceContribution/contributors";

const fetchJSON = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false); // Not using asynchronous, why? idk 🤷‍♂️ !
    xhr.send();
    return JSON.parse(xhr.responseText);
};

var contributors_raw = fetchJSON(repositoryURL);

// Mapping the data because we don't need that all
var contributors = Object.keys(contributors_raw).map(function (key) {
    let value = contributors_raw[key];
    return {
        username: value.login,
        avatar_url: value.avatar_url,
        contributions: value.contributions,
        github_url: value.html_url,
        github_api_url: value.url,
    };
});

// Here we are comparing the "contributions" count and sending
// to "sort" to arrange them in descending order
contributors.sort((a, b) => (a.contributions < b.contributions ? 1 : -1));
