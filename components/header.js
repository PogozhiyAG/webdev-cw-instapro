import { setUser, user } from "../auth.js";
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
                    user.get()
                        ? `<div title="Добавить пост" class="add-post-sign"></div>`
                        : "Войти"
                }
                </button>
                ${
                    user.get()
                        ? `<button title="${user.get().name}" class="header-button logout-button">Выйти</button>`
                        : ""
                }  
            </div>
        </div>`
    );

    element
        .querySelector(".add-or-login-button")
        .addEventListener("click", () => {
            if (user.get()) {
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
