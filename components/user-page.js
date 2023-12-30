import { renderPostList } from "./post-list.js";
import { getUserPosts } from "../api.js";
import { renderPage } from "./page.js";
import { renderLoading } from "./render-loading.js";
import { fromHTML } from "./utils.js";
import { user } from "../auth.js";
import { createState } from "../core/state.js";
import { registerEffect } from "../core/effect.js";

export function renderUserPageComponent(userInfo) {
    let isLoading = true;
    let statePosts = createState([]);
    let _renderPostList = renderPostList(statePosts);

    getUserPosts(userInfo.id).then(data => {
        isLoading = false;
        statePosts.set(data);      
    });

    registerEffect(() => {        
        getUserPosts(userInfo.id).then(data => {           
            statePosts.set(data);        
        });
    }, user)

    return () => {
        const banner = fromHTML(
            `<h1>Страница пользователя: ${userInfo.name}</h1>`
        );
        const content = isLoading ? renderLoading() : _renderPostList();
        const page = renderPage(banner, content);
        return page;
    };
}
