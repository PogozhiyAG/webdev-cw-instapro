import { renderPostList } from "../post-list.js";
import { getPosts } from "../../api.js";
import { renderPage } from "./page.js";
import { renderLoading } from "../loading.js";
import { userState } from "../../auth.js";
import { registerEffect } from "../../core/effect.js";
import { createState } from "../../core/state.js";

export function renderPostsPageComponent() {
    let isLoading = createState(true);
    let statePosts = createState([]);
    let _renderPostList = renderPostList({statePosts, withHeader: true});

    const reloadData = () => {
        isLoading.set(true);
        getPosts().then(data => {
            isLoading.set(false);
            statePosts.set(data);
        });
    }
    
    registerEffect(reloadData, userState);
    
    reloadData();
    
    return () => {
        const content = isLoading.get() ? renderLoading() : _renderPostList();
        const page = renderPage(content);
        return page;
    };
}
