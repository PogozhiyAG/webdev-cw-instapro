import { getPosts } from "./api.js";
import { renderAddPostPageComponent } from "./components/add-post-page-component.js";
import { renderAuthPageComponent } from "./components/auth-page-component.js";
import {
    ADD_POSTS_PAGE,
    AUTH_PAGE,
    LOADING_PAGE,
    POSTS_PAGE,
    USER_POSTS_PAGE,
} from "./routes.js";
import { renderPostsPageComponent } from "./components/posts-page-component.js";
import { renderLoadingPageComponent } from "./components/loading-page-component.js";
import {
    getUserFromLocalStorage,
    removeUserFromLocalStorage,
    saveUserToLocalStorage,
} from "./helpers.js";
import { renderUserPageComponent } from "./components/user-page.js";
import { user } from "./auth.js";

//export let user = getUserFromLocalStorage();
export let page = null;
//export let posts = [];

// const getToken = () => {
//     const token = user ? `Bearer ${user.token}` : undefined;
//     return token;
// };

// export const logout = () => {
//     user = null;
//     removeUserFromLocalStorage();
//     goToPage(POSTS_PAGE);
// };

let renderDelegate;
/**
 * Включает страницу приложения
 */
export const goToPage = (page, data) => {
    const appEl = document.getElementById("app");
    if (
        [POSTS_PAGE, AUTH_PAGE, ADD_POSTS_PAGE, USER_POSTS_PAGE].includes(page)
    ) {
        if (page === AUTH_PAGE) {
            renderDelegate = () => renderAuthPageComponent({ appEl });
        } else if (page === ADD_POSTS_PAGE) {
            renderDelegate = () =>
                renderAddPostPageComponent({
                    appEl,
                    onAddPostClick({ description, imageUrl }) {
                        // TODO: реализовать добавление поста в API
                        console.log("Добавляю пост...", {
                            description,
                            imageUrl,
                        });
                        goToPage(POSTS_PAGE);
                    },
                });
        } else if (page === POSTS_PAGE) {
            renderDelegate = () =>
                appEl.replaceChildren(renderPostsPageComponent());
        } else if (page === USER_POSTS_PAGE) {
            renderDelegate = () =>
                appEl.replaceChildren(renderUserPageComponent(data));
        }

        renderDelegate();
    } else {
        throw new Error("страницы не существует");
    }
};

export const renderApp = () => renderDelegate();

// export const renderApp = () => {
//     const appEl = document.getElementById("app");
//     // if (page === LOADING_PAGE) {
//     //     return renderLoadingPageComponent({
//     //         appEl,
//     //         user,
//     //         goToPage,
//     //     });
//     // }

//     if (page === AUTH_PAGE) {
//         return renderAuthPageComponent({
//             appEl,
//         });
//     }

//     if (page === ADD_POSTS_PAGE) {
//         return renderAddPostPageComponent({
//             appEl,
//             onAddPostClick({ description, imageUrl }) {
//                 // TODO: реализовать добавление поста в API
//                 console.log("Добавляю пост...", { description, imageUrl });
//                 goToPage(POSTS_PAGE);
//             },
//         });
//     }

//     if (page === POSTS_PAGE) {
//         return appEl.replaceChildren(renderPostsPageComponent());
//     }

//     if (page === USER_POSTS_PAGE) {
//         return appEl.replaceChildren(renderUserPageComponent());
//     }
// };

goToPage(POSTS_PAGE);
