import { fromHTML } from "./utils.js";

export const sortFunctions = {
    newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    popular: (a, b) => b.likes.length - a.likes.length
};


export const renderPostListControlPanel = (stateSortOrder) => {

    return () => {
        const element = fromHTML(`
            <div class="post-list__control-panel">                    
                <button class="link-button sort-button ${stateSortOrder.get() === sortFunctions.newest ? 'active-option' : ''}" data-sort="newest">новые</button>
                <button class="link-button sort-button ${stateSortOrder.get() === sortFunctions.oldest ? 'active-option' : ''}" data-sort="oldest">старые</button>
                <button class="link-button sort-button ${stateSortOrder.get() === sortFunctions.popular ? 'active-option' : ''}" data-sort="popular">популярные</button>
            </div>
        `);

        for(let button of element.querySelectorAll('.sort-button')){
            button.addEventListener('click', event => {            
                stateSortOrder.set(sortFunctions[event.target.dataset.sort]);
            });
        }

        return element;
    }
}