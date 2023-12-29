import { renderPostList } from "./post-list.js";
import { getPosts } from "../api.js";
import { renderPage } from "./page.js";
import { createState } from "../index.js";
import { renderLoading } from "./render-loading.js";

export function renderPostsPageComponent() {
    let isLoading = true;
    let statePosts = createState([]);
    let _renderPostList = renderPostList(statePosts);

    getPosts().then(data => {
        isLoading = false;
        statePosts.set(data);        
    });

    return () => {
        const content = isLoading ? renderLoading() : _renderPostList();
        const page = renderPage(content);
        return page;
    };
}
