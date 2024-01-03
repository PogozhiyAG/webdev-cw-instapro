import { createState } from "../core/state.js";
import { renderPostListControlPanel, sortFunctions } from "./post-list-control-panel.js";
import { renederPost } from "./post.js";
import { fromHTML } from "./utils.js";



export const renderPostList = ({statePosts, withHeader}) => {
    let stateSortOrder = createState(sortFunctions.newest);
    let controlPannel = renderPostListControlPanel(stateSortOrder);
    
    return () => {
        const element = fromHTML(`<div/>`);
        const postList = fromHTML('<ul class="posts"/>');
        element.append(
            controlPannel(),
            postList
        );
        

        const onPostChanged = post => {
            const index = statePosts.get().findIndex(p => p.id === post.id);
            if (index >= 0) {
                let newPosts = statePosts.get();
                newPosts[index] = post;
                statePosts.set(newPosts);
            }
        };

        postList.append(
            ...statePosts.get()
            .sort(stateSortOrder.get())
            .map(post => renederPost({post, onPostChanged, withHeader}))
        );

        return element;
    };
};
