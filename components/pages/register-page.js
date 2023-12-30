import { registerUser } from "../../api.js";
import { setUser } from "../../auth.js";
import { goToPage } from "../../index.js";
import { LOGIN_PAGE } from "../../routes.js";
import { renderPage } from "./page.js";
import { fromHTML } from "../utils.js";
import { renderUploadImageComponent } from "../upload-image-component.js";

export const renderRegisterPage = () => {
    let imageUrl = '';
    
    return () => {
        const form = fromHTML(`
            <div class="form">
                <h3 class="form-title">
                    Регистрация в Instapro
                </h3>
                <div class="form-inputs">
                    <div class="upload-image-container"></div>
                    <input type="text" class="name-input input" placeholder="Имя" />
                    <input type="text" class="login-input input" placeholder="Логин" />
                    <input type="password" class="password-input input" placeholder="Пароль" />
                    
                    <div class="form-error"></div>
                    
                    <button class="login-button button">Зарегистрироваться</button>
                </div>
            
                <div class="form-footer">
                    <p class="form-footer-title">
                        Уже есть аккаунт?
                        <button class="link-button toggle-button" >
                            Войти.
                        </button>
                    </p>
                </div>
            </div>`);

        const page = renderPage(form);

        const setError = message => form.querySelector(".form-error").textContent = message;

        renderUploadImageComponent({
            element: form.querySelector(".upload-image-container"),
            onImageUrlChange(newImageUrl) {
                imageUrl = newImageUrl;
            },
        });

        form.querySelector(".login-button").addEventListener("click", () => {
            setError("");

            const login = form.querySelector('.login-input').value;
            const name = form.querySelector('.name-input').value;
            const password = form.querySelector('.password-input').value;
            if (!name) {
                alert("Введите имя");
                return;
            }
            if (!login) {
                alert("Введите логин");
                return;
            }

            if (!password) {
                alert("Введите пароль");
                return;
            }

            if (!imageUrl) {
                alert("Не выбрана фотография");
                return;
            }

            registerUser({
                login: login,
                password: password,
                name: name,
                imageUrl,
            })
            .then(user => {
                setUser(user.user);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });

        });

        form.querySelector('.toggle-button').addEventListener('click', () => {
            goToPage(LOGIN_PAGE);
        });

        return page;
    }
}