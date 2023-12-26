import { posts } from "../index.js";
import { renderPostList } from "./post-list.js";
import { renderHeader } from "./header.js";
import { fromHTML } from "./render.js";

export function renderPostsPageComponent() {
    // TODO: реализовать рендер постов из api
    console.log("Актуальный список постов:", posts);

    /**
     * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
     * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
     */
    const element = fromHTML(`
        <div class="page-container">
        </div>`);

    element.append(renderHeader(), renderPostList(posts));

    return element;
}
