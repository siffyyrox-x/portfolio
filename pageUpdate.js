const footer = document.getElementById("footer");
const url = window.location.href;
const last_modified = document.lastModified;
const datenTime = new Date(last_modified).toLocaleString();
footer.innerHTML = `
 Page Url : <a href="${url}" target="_blank"> ${url} </a><br>
 Last Modified : ${datenTime}
`;

function toggleMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}