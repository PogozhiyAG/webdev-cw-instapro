import { goToPage } from "../index.js";
import { USER_POSTS_PAGE } from "../routes.js";
import { fromHTML } from "./render.js";

export const renederPost = post => {
    const likeImage = `./assets/images/${
        post.isLiked ? "like-active.svg" : "like-not-active.svg"
    }`;

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

    element.querySelector(".post-header").addEventListener("click", () => {
        goToPage(USER_POSTS_PAGE, {
            userId: post.user.id,
        });
    });

    return element;
};
