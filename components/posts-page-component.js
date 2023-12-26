import { renderPostList } from "./post-list.js";
import { getPosts } from "../api.js";
import { loadingContainer } from "./loading-container.js";
import { renderPage } from "./page.js";
import { user } from "../auth.js";

//TODO: временно
const getToken = () => {
    const token = user ? `Bearer ${user.token}` : undefined;
    return token;
};

export function renderPostsPageComponent() {
    const loadingPosts = loadingContainer(
        getPosts({ token: getToken() }).then(posts => renderPostList(posts))
    );

    const element = renderPage(loadingPosts);

    return element;
}
