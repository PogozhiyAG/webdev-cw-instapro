import {
    ADD_POSTS_PAGE,    
    LOGIN_PAGE,
    POSTS_PAGE,
    REGISTER_PAGE,
    USER_POSTS_PAGE,
} from "./routes.js";
import { renderAddPostPageComponent } from "./components/pages/add-post-page-component.js";
import { renderPostsPageComponent } from "./components/pages/posts-page-component.js";
import { renderUserPageComponent } from "./components/pages/user-page.js";
import { renderLoginPage } from "./components/pages/login-page.js";
import { renderRegisterPage } from "./components/pages/register-page.js";
import { mountRootComponent, renderRoot, setRootElement } from "./core/render.js";


const navigationData = {};
navigationData[LOGIN_PAGE]      = renderLoginPage;
navigationData[REGISTER_PAGE]   = renderRegisterPage;
navigationData[POSTS_PAGE]      = renderPostsPageComponent;
navigationData[USER_POSTS_PAGE] = renderUserPageComponent;
navigationData[ADD_POSTS_PAGE]  = renderAddPostPageComponent;


export const goToPage = (page, data) => {
    const pageFunction = navigationData[page];
    if(!pageFunction){
        throw new Error("страницы не существует");    
    }

    mountRootComponent(() => pageFunction(data));

    renderRoot();
};


setRootElement(document.getElementById("app"));
goToPage(POSTS_PAGE);
