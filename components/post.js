import { dislikePost, likePost } from "../api.js";
import { user } from "../auth.js";
import { goToPage } from "../index.js";
import { USER_POSTS_PAGE } from "../routes.js";
import { fromHTML } from "./utils.js";

export const renederPost = (post, onPostChanged) => {
    const likeImage = `./assets/images/${
        post.isLiked ? "like-active.svg" : "like-not-active.svg"
    }`;

    /**
     * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
     * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
     */
    const element = fromHTML(`
        <li class="post">
            <div class="post-header" data-user-id="${post.user.id}">
                <img src="${post.user.imageUrl}" class="post-header__user-image">
                <p class="post-header__user-name">${post.user.name}</p>
            </div>
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
                <span class="user-name">${post.user.name}</span>
                ${post.description}
            </p>
            <p class="post-date">
                ${post.createdAt}
            </p>
        </li>`);

    
    element.querySelector(".like-button").addEventListener("click", () => {
        if(!user.get()){
            alert('Войдите, чтобы лайкать');
            return;
        }
        
        const action = post.isLiked ? dislikePost(post.id) : likePost(post.id);
        action.then(p => {
            if (onPostChanged) {
                onPostChanged(p);
            }
        });
    });

    element.querySelector(".post-header").addEventListener("click", () => {
        goToPage(USER_POSTS_PAGE, post.user);
    });

    return element;
};
