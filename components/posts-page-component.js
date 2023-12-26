import { renderPostList } from "./post-list.js";
import { getPosts } from "../api.js";
import { loadingContainer } from "./loading-container.js";
import { renderPage } from "./page.js";

export function renderPostsPageComponent() {
    const loadingPosts = loadingContainer(
        getPosts().then(posts => renderPostList(posts))
    );

    const element = renderPage(loadingPosts);

    return element;
}
