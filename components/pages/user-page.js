import { renderPostList } from "../post-list.js";
import { getUserPosts } from "../../api.js";
import { renderPage } from "./page.js";
import { renderLoading } from "../loading.js";
import { fromHTML } from "../utils.js";
import { userState } from "../../auth.js";
import { createState } from "../../core/state.js";
import { registerEffect } from "../../core/effect.js";

export function renderUserPageComponent(userInfo) {
    let isLoading = createState(true);
    let statePosts = createState([]);
    let _renderPostList = renderPostList({statePosts, withHeader: false});

    const reloadData = () => {
        isLoading.set(true);
        getUserPosts(userInfo.id).then(data => {
            isLoading.set(false);
            statePosts.set(data);
        });
    }
    
    registerEffect(reloadData, userState);

    reloadData();

    return () => {
        const banner = fromHTML(
            `<div class="user-page-header">
                <img src="${userInfo.imageUrl}" class="user-page__user-image">
                <p class="user-page__user-name">${userInfo.name}</p>
            </div>`
        );
        const content = isLoading.get() ? renderLoading() : _renderPostList();
        const page = renderPage(banner, content);
        return page;
    };
}
