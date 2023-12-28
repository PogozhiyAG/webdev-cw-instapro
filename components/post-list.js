import { renderApp } from "../index.js";
import { renederPost } from "./post.js";
import { fromHTML } from "./render.js";

const sortFunctions = {
    newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    popular: (a, b) => b.likes.length - a.likes.length
};

export const renderPostList = posts => {
    let sortOrder = sortFunctions.newest;
    
    const onPostChanged = post => {
        const index = posts.findIndex(p => p.id === post.id);
        if (index >= 0) {
            posts[index] = post;
            renderApp();
        }
    };

    return () => {
        const element = fromHTML(`
            <div>
                <div class="post-list__control-panel">                    
                    <button class="link-button sort-button ${sortOrder === sortFunctions.newest ? 'active-option' : ''}" data-sort="newest">новые</button>
                    <button class="link-button sort-button ${sortOrder === sortFunctions.oldest ? 'active-option' : ''}" data-sort="oldest">старые</button>
                    <button class="link-button sort-button ${sortOrder === sortFunctions.popular ? 'active-option' : ''}" data-sort="popular">популярные</button>
                </div>
                <ul class="posts"/>
            </div>
        `);
        
        for(let button of element.querySelectorAll('.sort-button')){
            button.addEventListener('click', event => {            
                sortOrder = sortFunctions[event.target.dataset.sort];
                renderApp();
            });
        }

        element.querySelector('.posts').append(
            ...posts
            .sort(sortOrder)
            .map(post => renederPost(post, onPostChanged))
        );

        return element;
    };
};
