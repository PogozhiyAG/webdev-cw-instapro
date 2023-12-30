import { createPost } from "../../api.js";
import { userState } from "../../auth.js";
import { goToPage } from "../../index.js";
import { POSTS_PAGE } from "../../routes.js";
import { renderPage } from "./page.js";
import { fromHTML } from "../utils.js";
import { renderUploadImageComponent } from "../upload-image.js";
import { registerEffect } from "../../core/effect.js";

export const renderAddPostPageComponent = () => {
  let imageUrl;

  registerEffect(() => {      
      if(!userState.get()){
        goToPage(POSTS_PAGE);
      }
  }, userState);


  return () => {
    const form = fromHTML(`
      <div class="form">
        <h3 class="form-title">
          Добавить пост
        </h3>
        <div class="form-inputs">
          <div class="upload-image-container"></div>
          <textarea class="description-input input textarea" rows="4"></textarea>
          <button class="add-button button">Добавить</button>
          <div class="form-error"></div>
        </div>
      </div>
      `
    );

    renderUploadImageComponent({
      element: form.querySelector(".upload-image-container"),
      onImageUrlChange(newImageUrl) {
          imageUrl = newImageUrl;
      },
    });

    const setError = message => form.querySelector(".form-error").textContent = message;

    form.querySelector(".add-button").addEventListener('click', () => {
      setError('');     

      const description = form.querySelector(".description-input").value;

      if(!imageUrl){
        setError('Не загружена фотография');
        return;
      }

      if(!description){
        setError('Не введено описание');
        return;
      }
      
      createPost(description, imageUrl)
      .then(() => goToPage(POSTS_PAGE))
      .catch(error => setError(error.message));
    });

    const page = renderPage(form);
    return page;
  }
}
