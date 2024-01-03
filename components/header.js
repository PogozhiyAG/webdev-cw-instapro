import { setUser, userState } from "../auth.js";
import { goToPage } from "../index.js";
import { ADD_POSTS_PAGE, LOGIN_PAGE, POSTS_PAGE } from "../routes.js";
import { fromHTML } from "./utils.js";

export const renderHeader = () => {
    const element = fromHTML(
        `<div class="header-container">
            <div class="page-header">
                <h1 class="logo">instapro</h1>
                <button class="header-button add-or-login-button">
                ${
                    userState.get()
                        ? `<div title="Добавить пост" class="add-post-sign"></div>`
                        : "Войти"
                }
                </button>
                ${
                    userState.get()
                        ? `<button title="${userState.get().name}" class="header-button logout-button">Выйти</button>`
                        : ""
                }  
            </div>
        </div>`
    );

    element
        .querySelector(".add-or-login-button")
        .addEventListener("click", () => {
            if (userState.get()) {
                goToPage(ADD_POSTS_PAGE);
            } else {
                goToPage(LOGIN_PAGE);
            }
        });

    element.querySelector(".logo").addEventListener("click", () => {
        goToPage(POSTS_PAGE);
    });

    element.querySelector(".logout-button")?.addEventListener("click", () => {
        setUser(null);       
    });

    return element;
};
