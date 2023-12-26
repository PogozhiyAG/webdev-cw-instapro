import { renederPost } from "./post.js";
import { fromHTML } from "./render.js";

export const renderPostList = posts => {
    const element = fromHTML(`<ul class="posts"/>`);
    element.append(...posts.map(post => renederPost(post)));
    return element;
};
