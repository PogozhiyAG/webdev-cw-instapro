import { renderAddPostPageComponent } from "./components/add-post-page-component.js";
import { renderAuthPageComponent } from "./components/auth-page-component.js";
import {
    ADD_POSTS_PAGE,
    AUTH_PAGE,
    LOGIN_PAGE,
    POSTS_PAGE,
    REGISTER_PAGE,
    USER_POSTS_PAGE,
} from "./routes.js";
import { renderPostsPageComponent } from "./components/posts-page-component.js";
import { renderUserPageComponent } from "./components/user-page.js";
import { renderLoginPage } from "./components/login-page.js";
import { renderRegisterPage } from "./components/register-page.js";

const appEl = document.getElementById("app");
let renderDelegate;
let refreshDelegate;

export const goToPage = (page, data) => {
    if (
        [POSTS_PAGE, LOGIN_PAGE, REGISTER_PAGE, ADD_POSTS_PAGE, USER_POSTS_PAGE].includes(page)
    ) {
        
        refreshDelegate = () => goToPage(page, data);

        if (page === AUTH_PAGE) {
            // renderDelegate = () => renderAuthPageComponent({ appEl });
        } else if (page === LOGIN_PAGE) {
            renderDelegate = renderLoginPage();
        } else if (page === REGISTER_PAGE) {
            renderDelegate = renderRegisterPage();
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

export const refreshApp = () => refreshDelegate();

goToPage(POSTS_PAGE);
