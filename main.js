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
        <td>${url.includes("%s") ? "✔️" : ""}</td>`;
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
