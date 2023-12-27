import { renderPostList } from "./post-list.js";
import { getPosts } from "../api.js";
import { loadingContainer } from "./loading-container.js";
import { renderPage } from "./page.js";
import { renderApp } from "../index.js";
import { fromHTML } from "./render.js";

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

const renderLoading = () =>
    fromHTML(`
        <div class="loading-container">
            <div class="loading-page">
                <div class="loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>`);
