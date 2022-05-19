let root = document.documentElement;

root.addEventListener("mousemove", (e) => {
  root.style.setProperty(
    "--mouse-x",
    document.scrollingElement.scrollTop + "px"
  );
  root.style.setProperty("--mouse-x", e.clientX + "px");
  root.style.setProperty("--mouse-y", e.clientY + "px");
});

root.addEventListener("mousedown", (e) => {
  root.style.setProperty("--mover-background-color", "#bbb");
});

root.addEventListener("mouseup", (e) => {
  root.style.setProperty("--mover-background-color", "transparent");
});
