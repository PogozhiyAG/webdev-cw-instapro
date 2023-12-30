import { renderPostList } from "../post-list.js";
import { getPosts } from "../../api.js";
import { renderPage } from "./page.js";
import { renderLoading } from "../render-loading.js";
import { user } from "../../auth.js";
import { registerEffect } from "../../core/effect.js";
import { createState } from "../../core/state.js";

export function renderPostsPageComponent() {
    let isLoading = createState(true);
    let statePosts = createState([]);
    let _renderPostList = renderPostList(statePosts);

    const reloadData = (omitRender) => {
        isLoading.set(true, omitRender);
        getPosts().then(data => {
            isLoading.set(false, true);
            statePosts.set(data);
        });
    }
    
    registerEffect(() => {
        isLoading.set(false);
        reloadData();
    }, user);
    
    reloadData(true);
    
    return () => {
        const content = isLoading.get() ? renderLoading() : _renderPostList();
        const page = renderPage(content);
        return page;
    };
}
