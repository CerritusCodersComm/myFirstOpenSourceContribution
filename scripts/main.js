let tableContent = ``;

for (let i = 0; i < contributors.length; i++) {
    let row = `
        <tr>
            <td>
                <img src="${contributors[i].avatar_url}" alt="avatar">
            </td>
            <td>
                <a id="user-${contributors[i].username}" href=${contributors[i].github_url} class="name" target="_blank"><b>${contributors[i].username}</b></a>
            </td>
            <td class="rank">${contributors[i].contributions}</td>
        </tr>`;
    tableContent += row;
}

document.getElementsByTagName("table")[0].innerHTML = tableContent;

window.onload = function () {
    // Updating the name of contributors
    // Didn't this before rendering the table because it will
    // make page loading slower af
    for (let i = 0; i < contributors.length; i++) {
        var data = fetchJSON(contributors[i].github_api_url);
        console.log(data.name);
        if (data.name) document.getElementById("user-" + contributors[i].username).innerHTML = `<b>${data.name}</b>`;
    }
};
