const container = document.createElement("div");
container.className = "container";

const box = document.createElement("div");
box.className = "box";

const input = document.createElement("input");
input.className = "task";
input.placeholder = "Enter yout task";

container.prepend(box);
