const form = document.querySelector("form");
const input = document.querySelector("input");
const tbody = document.querySelector("tbody");

const rows = [];
const lookup = {};

window.engines
  .trim()
  .split("\n")
  .forEach((line) => {
    const [label, shortcut, url] = line.split(",");
    const row = document.createElement("tr");
    row.dataset.shortcut = shortcut;
    row.innerHTML = `<td>${label}</td>
        <td>${shortcut}</td>
        <td>${url.includes("%s") ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>` : ""}</td>`;
    rows.push(row);
    lookup[shortcut] = {
      element: row,
      url: url,
    };
    tbody.appendChild(row);
  });

input.addEventListener("input", (e) => {
  const [shortcut] = input.value.split(" ");
  const found = lookup[shortcut];
  if (found) {
    found.element.classList.add("highlight");
  }
  if (input.value.length < 2) {
    rows.forEach((row) => row.classList.remove("highlight"));
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  navigate(input.value);
});

function navigate(string) {
  const [shortcut, ...value] = string.split(" ");
  const found = lookup[shortcut];
  if (found) {
    window.open(found.url.replace("%s", value.join(" ")), "_self");
  }
}

const usp = new URLSearchParams(window.location.search);
const query = usp.get("q");
if (query) {
  input.value = query;
  navigate(query);
}
