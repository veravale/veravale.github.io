const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const compose = document.querySelector("#composeEmail");

compose?.addEventListener("click", () => {
  const form = compose.closest("form");
  const data = new FormData(form);
  const name = data.get("name") || "Anonymous";
  const email = data.get("email") || "";
  const session = data.get("session") || "Orientation";
  const note = data.get("note") || "";

  const subject = encodeURIComponent(`Private consultation inquiry: ${session}`);
  const body = encodeURIComponent(
    `Name or alias: ${name}\nEmail: ${email}\nSession interest: ${session}\n\nNote:\n${note}\n`
  );

  window.location.href = `mailto:booking@veravale.example?subject=${subject}&body=${body}`;
});
