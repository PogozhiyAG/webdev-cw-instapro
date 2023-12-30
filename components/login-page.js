import { loginUser } from "../api.js";
import { setUser } from "../auth.js";
import { goToPage } from "../index.js";
import { POSTS_PAGE, REGISTER_PAGE } from "../routes.js";
import { renderPage } from "./page.js";
import { fromHTML } from "./utils.js";

export const renderLoginPage = () => {
    return () => {
        const form = fromHTML(`
            <div class="form">
                <h3 class="form-title">
                    Вход в Instapro
                </h3>
                <div class="form-inputs">
                    <input type="text" class="login-input input" placeholder="Логин" />
                    <input type="password" class="password-input input" placeholder="Пароль" />
                    
                    <div class="form-error"></div>
                    
                    <button class="login-button button">Войти</button>
                </div>
            
                <div class="form-footer">
                    <p class="form-footer-title">
                        Нет аккаунта?
                        <button class="link-button toggle-button">
                            Зарегистрироваться.
                        </button>
                    </p>
                </div>
            </div>`);

        const page = renderPage(form);

        const setError = message => form.querySelector(".form-error").textContent = message;        

        form.querySelector(".login-button").addEventListener("click", () => {
            setError("");

            const login = form.querySelector(".login-input").value;
            const password = form.querySelector(".password-input").value;

            if (!login) {
                alert("Введите логин");
                return;
            }

            if (!password) {
                alert("Введите пароль");
                return;
            }

            loginUser({
                login: login,
                password: password,
            })
            .then(userData => {
                setUser(userData.user);
                goToPage(POSTS_PAGE);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
        });

        form.querySelector('.toggle-button').addEventListener('click', () => {
            goToPage(REGISTER_PAGE);
        });

        return page;
    };
};
