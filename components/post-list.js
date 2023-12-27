import { renderApp } from "../index.js";
import { renederPost } from "./post.js";
import { fromHTML } from "./render.js";

export const renderPostList = posts => {
    let sortOrder = 0;
    let dateFilter = null;

    const onLikeChaged = post => {
        const index = posts.findIndex(p => p.id === post.id);
        if (index >= 0) {
            posts[index] = post;
            renderApp();
        }
    };

    return () => {
        const element = fromHTML(`<ul class="posts"/>`);
        element.append(...posts.map(post => renederPost(post, onLikeChaged)));
        return element;
    };
};
