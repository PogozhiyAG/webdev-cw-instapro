//import { posts } from "../index.js";
import { renderPostList } from "./post-list.js";
import { renderHeader } from "./header.js";
import { fromHTML } from "./render.js";
import { getPosts } from "../api.js";
import { user } from "../index.js";
import { renderLoading } from "./loading.js";

//TODO: временно
const getToken = () => {
    const token = user ? `Bearer ${user.token}` : undefined;
    return token;
};

export function renderPostsPageComponent() {
    const element = fromHTML(`
        <div class="page-container">
        </div>`);

    const loadingElement = renderLoading();

    element.append(renderHeader(), loadingElement);

    getPosts({ token: getToken() })
        .then(posts =>
            element.replaceChild(renderPostList(posts), loadingElement)
        )
        .catch(error => {
            console.error(error);
            element.removeChild(loadingElement);
        });

    return element;
}
