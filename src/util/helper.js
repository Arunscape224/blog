const grabText = html => {
  let divContainer = document.createElement("div")
  divContainer.innerHTML = html
  return divContainer.textContent || divContainer.innerText || ""
}

export { grabText }
