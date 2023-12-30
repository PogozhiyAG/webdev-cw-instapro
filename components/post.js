import { dislikePost, likePost } from "../api.js";
import { userState } from "../auth.js";
import { goToPage } from "../index.js";
import { USER_POSTS_PAGE } from "../routes.js";
import { fromHTML } from "./utils.js";
import { formatDistanceToNow } from 'date-fns'
import ru from "date-fns/locale/ru";

export const renederPost = ({post, onPostChanged, withHeader = true}) => {
    const likeImage = `./assets/images/${post.isLiked ? "like-active.svg" : "like-not-active.svg"}`;

    const element = fromHTML(`
        <li class="post">
            ${withHeader 
                ? `<div class="post-header">
                        <img src="${post.user.imageUrl}" class="post-header__user-image">
                        <p class="post-header__user-name data-user-name"></p>
                    </div>`
                : ``
            }            
            <div class="post-image-container">
                <img class="post-image" src="${post.imageUrl}">
            </div>
            <div class="post-likes">
                <button data-post-id="${post.id}" class="like-button">
                    <img src="${likeImage}">
                </button>
                <p class="post-likes-text">
                    Нравится: <strong>${post.likes.length}</strong>
                </p>
            </div>
            <p class="post-text">
                <span class="user-name data-user-name"></span>
                <span class="data-post-description"></span>
                
            </p>
            <p class="post-date">
                ${ formatDistanceToNow(post.createdAt, {locale: ru})}
            </p>
        </li>`);

    //against the html injection atack
    for (let e of element.querySelectorAll('.data-user-name')) e.textContent = post.user.name;
    for (let e of element.querySelectorAll('.data-post-description')) e.textContent = post.description;
    
    element.querySelector(".like-button").addEventListener("click", (event) => {
        if(!userState.get()){
            alert('Войдите, чтобы лайкать');
            return;
        }
        
        event.target.classList.add('loading-like');
        
        const action = post.isLiked ? dislikePost(post.id) : likePost(post.id);
        action.then(p => {
            event.target.classList.remove('loading-like');
            if (onPostChanged) {
                onPostChanged(p);
            }
        });
    });

    element.querySelector(".post-header")?.addEventListener("click", () => {
        goToPage(USER_POSTS_PAGE, post.user);
    });

    return element;
};
