import { renderPostList } from "./post-list.js";
import { getPosts } from "../api.js";
import { renderPage } from "./page.js";
import { renderLoading } from "./render-loading.js";
import { user } from "../auth.js";
import { registerEffect } from "../core/effect.js";
import { createState } from "../core/state.js";

export function renderPostsPageComponent() {
    let isLoading = true;
    let statePosts = createState([]);
    let _renderPostList = renderPostList(statePosts);

    getPosts().then(data => {
        isLoading = false;
        statePosts.set(data);        
    });

    registerEffect(()=>{
        console.log('user was changed');
        getPosts().then(data => {           
            statePosts.set(data);        
        });
    }, user)

    return () => {
        const content = isLoading ? renderLoading() : _renderPostList();
        const page = renderPage(content);
        return page;
    };
}
