import { renderPostList } from "../post-list.js";
import { getUserPosts } from "../../api.js";
import { renderPage } from "./page.js";
import { renderLoading } from "../loading.js";
import { fromHTML } from "../utils.js";
import { user } from "../../auth.js";
import { createState } from "../../core/state.js";
import { registerEffect } from "../../core/effect.js";

export function renderUserPageComponent(userInfo) {
    let isLoading = createState(true);
    let statePosts = createState([]);
    let _renderPostList = renderPostList(statePosts);

    const reloadData = (omitRender) => {
        isLoading.set(true, omitRender);
        getUserPosts(userInfo.id).then(data => {
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
        const banner = fromHTML(
            `<h1>Страница пользователя: ${userInfo.name}</h1>`
        );
        const content = isLoading.get() ? renderLoading() : _renderPostList();
        const page = renderPage(banner, content);
        return page;
    };
}
