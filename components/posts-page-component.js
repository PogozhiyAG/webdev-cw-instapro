import { renderPostList } from "./post-list.js";
import { getPosts } from "../api.js";
import { renderPage } from "./page.js";
import { renderApp } from "../index.js";
import { renderLoading } from "./render-loading.js";

export function renderPostsPageComponent() {
    let isLoading = true;
    let posts = null;
    let _renderPostList = null;

    getPosts().then(data => {
        posts = data;
        isLoading = false;
        _renderPostList = renderPostList(posts);
        renderApp();
    });

    return () => {
        const content = isLoading ? renderLoading() : _renderPostList();
        const page = renderPage(content);
        return page;
    };
}
