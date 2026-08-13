(() => {
  const names = [
    "Syntrichia caninervis", "Syntrichia norvegica", "Syntrichia princeps", "Syntrichia ruralis",
    "Physcomitrella patens", "Arabidopsis thaliana", "Avicennia germinans", "Baccharis pilularis",
    "Bryum argenteum", "Calasterella californica", "Chrysothamnus viscidiflorus", "Fraxinus anomala",
    "Penstemon ambiguus", "Tortula inermis", "S. caninervis", "S. norvegica", "S. princeps",
    "S. ruralis", "P. patens", "T. inermis", "Syntrichia", "Arabidopsis", "Calasterella",
    "Coccidioides", "Cuscuta", "Grimmia", "Methylobacteria"
  ];
  const escaped = names
    .sort((a, b) => b.length - a.length)
    .map(name => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`\\b(?:${escaped.join("|")})\\b`, "g");
  const skip = new Set(["CODE", "PRE", "SCRIPT", "STYLE", "TEXTAREA"]);
  const root = document.querySelector(".page-body");
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !pattern.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
      pattern.lastIndex = 0;
      const parent = node.parentElement;
      return parent && !skip.has(parent.tagName) && !parent.closest("i, em")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    const fragment = document.createDocumentFragment();
    let last = 0;
    node.nodeValue.replace(pattern, (match, offset) => {
      fragment.append(node.nodeValue.slice(last, offset));
      const italic = document.createElement("i");
      italic.textContent = match;
      fragment.append(italic);
      last = offset + match.length;
      return match;
    });
    fragment.append(node.nodeValue.slice(last));
    node.replaceWith(fragment);
  });
})();
