import {
    ADD_POSTS_PAGE,    
    LOGIN_PAGE,
    POSTS_PAGE,
    REGISTER_PAGE,
    USER_POSTS_PAGE,
} from "./routes.js";
import { renderAddPostPageComponent } from "./components/add-post-page-component.js";
import { renderPostsPageComponent } from "./components/posts-page-component.js";
import { renderUserPageComponent } from "./components/user-page.js";
import { renderLoginPage } from "./components/login-page.js";
import { renderRegisterPage } from "./components/register-page.js";
import { user } from "./auth.js";

const appEl = document.getElementById("app");

let renderDelegate;
let refreshDelegate;


export const goToPage = (page, data) => {
    refreshDelegate = () => goToPage(page, data);

    if(!user && [ADD_POSTS_PAGE].includes(page)){
        page = POSTS_PAGE;
    }

    if (page === LOGIN_PAGE) {
        renderDelegate = renderLoginPage();
    } else if (page === REGISTER_PAGE) {
        renderDelegate = renderRegisterPage();
    } else if (page === ADD_POSTS_PAGE) {
        renderDelegate = renderAddPostPageComponent();        
    } else if (page === POSTS_PAGE) {
        renderDelegate = renderPostsPageComponent();
    } else if (page === USER_POSTS_PAGE) {
        renderDelegate = renderUserPageComponent(data);
    } else{
        throw new Error("страницы не существует");    
    }

    renderApp();
};

export const renderApp = () => appEl.replaceChildren(renderDelegate());

export const refreshApp = () => refreshDelegate();

export const createState = (initialValue) => {
    let value = initialValue;
    
    const result = {        
        set(v){
            value = v;
            renderApp();
        },
        get(){
            return value;
        }
    }
    
    return result;
}

goToPage(POSTS_PAGE);
