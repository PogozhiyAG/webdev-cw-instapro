import { renderAddPostPageComponent } from "./components/add-post-page-component.js";
import { renderAuthPageComponent } from "./components/auth-page-component.js";
import {
    ADD_POSTS_PAGE,
    AUTH_PAGE,
    POSTS_PAGE,
    USER_POSTS_PAGE,
} from "./routes.js";
import { renderPostsPageComponent } from "./components/posts-page-component.js";
import { renderUserPageComponent } from "./components/user-page.js";

const appEl = document.getElementById("app");
let renderDelegate;

export const goToPage = (page, data) => {
    if (
        [POSTS_PAGE, AUTH_PAGE, ADD_POSTS_PAGE, USER_POSTS_PAGE].includes(page)
    ) {
        if (page === AUTH_PAGE) {
            // renderDelegate = () => renderAuthPageComponent({ appEl });
        } else if (page === ADD_POSTS_PAGE) {
            // renderDelegate = () =>
            //     renderAddPostPageComponent({
            //         appEl,
            //         onAddPostClick({ description, imageUrl }) {
            //             // TODO: реализовать добавление поста в API
            //             console.log("Добавляю пост...", {
            //                 description,
            //                 imageUrl,
            //             });
            //             goToPage(POSTS_PAGE);
            //         },
            //     });
        } else if (page === POSTS_PAGE) {
            renderDelegate = renderPostsPageComponent();
        } else if (page === USER_POSTS_PAGE) {
            renderDelegate = renderUserPageComponent(data);
        }

        renderApp();
    } else {
        throw new Error("страницы не существует");
    }
};

export const renderApp = () => {
    appEl.replaceChildren(renderDelegate());
};

goToPage(POSTS_PAGE);
