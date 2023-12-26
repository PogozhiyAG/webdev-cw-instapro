import { renderPostList } from "./post-list.js";
import { getUserPosts } from "../api.js";
import { loadingContainer } from "./loading-container.js";
import { renderPage } from "./page.js";
import { fromHTML } from "./render.js";

export function renderUserPageComponent(userInfo) {
    const loadingPosts = loadingContainer(
        getUserPosts(userInfo.id).then(posts => renderPostList(posts))
    );

    const banner = fromHTML(`<h1>Страница пользователя: ${userInfo.name}</h1>`);

    const element = renderPage(banner, loadingPosts);

    return element;
}
