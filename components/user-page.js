import { renderPostList } from "./post-list.js";
import { getUserPosts } from "../api.js";
import { renderPage } from "./page.js";
import { renderApp } from "../index.js";
import { renderLoading } from "./render-loading.js";
import { fromHTML } from "./render.js";

export function renderUserPageComponent(userInfo) {
    let isLoading = true;
    let posts = null;
    let _renderPostList = null;

    getUserPosts(userInfo.id).then(data => {
        posts = data;
        isLoading = false;
        _renderPostList = renderPostList(posts);
        renderApp();
    });

    return () => {
        const banner = fromHTML(
            `<h1>Страница пользователя: ${userInfo.name}</h1>`
        );
        const content = isLoading ? renderLoading() : _renderPostList();
        const page = renderPage(banner, content);
        return page;
    };
}
