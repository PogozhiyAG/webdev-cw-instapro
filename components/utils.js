export const fromHTML = html => {
    const fragment = document.createElement("fragment");
    fragment.innerHTML = html;
    return fragment.children.length === 1 ? fragment.children[0] : fragment;
};
