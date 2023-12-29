import { renderPostList } from "./post-list.js";
import { getUserPosts } from "../api.js";
import { renderPage } from "./page.js";
import { createState } from "../index.js";
import { renderLoading } from "./render-loading.js";
import { fromHTML } from "./render.js";

export function renderUserPageComponent(userInfo) {
    let isLoading = true;
    let statePosts = createState([]);
    let _renderPostList = renderPostList(statePosts);

    getUserPosts(userInfo.id).then(data => {
        isLoading = false;
        statePosts.set(data);      
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
