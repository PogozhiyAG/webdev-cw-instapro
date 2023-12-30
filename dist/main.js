/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPost: () => (/* binding */ createPost),\n/* harmony export */   dislikePost: () => (/* binding */ dislikePost),\n/* harmony export */   getPosts: () => (/* binding */ getPosts),\n/* harmony export */   getUserPosts: () => (/* binding */ getUserPosts),\n/* harmony export */   likePost: () => (/* binding */ likePost),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser),\n/* harmony export */   uploadImage: () => (/* binding */ uploadImage)\n/* harmony export */ });\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.js */ \"./auth.js\");\n// Замени на свой, чтобы получить независимый от других набор данных.\r\n\r\n\r\n\r\n// \"боевая\" версия инстапро лежит в ключе prod\r\nconst personalKey = \"prod\";\r\nconst baseHost = \"https://webdev-hw-api.vercel.app\";\r\nconst postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;\r\n\r\nconst getTokenHeader = () => (_auth_js__WEBPACK_IMPORTED_MODULE_0__.userState.get() ? `Bearer ${_auth_js__WEBPACK_IMPORTED_MODULE_0__.userState.get().token}` : undefined);\r\n\r\nfunction getPosts() {\r\n    return fetch(postsHost, {\r\n        method: \"GET\",\r\n        headers: {\r\n            Authorization: getTokenHeader(),\r\n        },\r\n    })\r\n    .then(response => {\r\n        if (response.status === 401) {\r\n            throw new Error(\"Нет авторизации\");\r\n        }\r\n\r\n        return response.json();\r\n    })\r\n    .then(data => {\r\n        return data.posts;\r\n    });\r\n}\r\n\r\nfunction getUserPosts(id) {\r\n    return fetch(postsHost + `/user-posts/${id}`, {\r\n        method: \"GET\",\r\n        headers: {\r\n            Authorization: getTokenHeader(),\r\n        },\r\n    })\r\n    .then(response => {\r\n        if (response.status === 401) {\r\n            throw new Error(\"Нет авторизации\");\r\n        }\r\n\r\n        return response.json();\r\n    })\r\n    .then(data => {\r\n        return data.posts;\r\n    });\r\n}\r\n\r\nfunction createPost(description, imageUrl) {\r\n    return fetch(postsHost, {\r\n        method: \"POST\",\r\n        headers: {\r\n            Authorization: getTokenHeader(),\r\n        },\r\n        body: JSON.stringify({description, imageUrl})\r\n    })\r\n        .then(response => {\r\n            if (response.status === 401) {\r\n                throw new Error(\"Нет авторизации\");\r\n            }\r\n\r\n            return response.json();\r\n        })\r\n        .then(data => {\r\n            return data.post;\r\n        });\r\n}\r\n\r\nfunction likePost(id) {\r\n    return fetch(postsHost + `/${id}/like`, {\r\n        method: \"POST\",\r\n        headers: {\r\n            Authorization: getTokenHeader(),\r\n        },\r\n    })\r\n        .then(response => {\r\n            if (response.status === 401) {\r\n                throw new Error(\"Нет авторизации\");\r\n            }\r\n\r\n            return response.json();\r\n        })\r\n        .then(data => {\r\n            return data.post;\r\n        });\r\n}\r\n\r\nfunction dislikePost(id) {\r\n    return fetch(postsHost + `/${id}/dislike`, {\r\n        method: \"POST\",\r\n        headers: {\r\n            Authorization: getTokenHeader(),\r\n        },\r\n    })\r\n        .then(response => {\r\n            if (response.status === 401) {\r\n                throw new Error(\"Нет авторизации\");\r\n            }\r\n\r\n            return response.json();\r\n        })\r\n        .then(data => {\r\n            return data.post;\r\n        });\r\n}\r\n\r\n// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F\r\nfunction registerUser({ login, password, name, imageUrl }) {\r\n    return fetch(baseHost + \"/api/user\", {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n            login,\r\n            password,\r\n            name,\r\n            imageUrl,\r\n        }),\r\n    }).then(response => {\r\n        if (response.status === 400) {\r\n            throw new Error(\"Такой пользователь уже существует\");\r\n        }\r\n        return response.json();\r\n    });\r\n}\r\n\r\nfunction loginUser({ login, password }) {\r\n    return fetch(baseHost + \"/api/user/login\", {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n            login,\r\n            password,\r\n        }),\r\n    }).then(response => {\r\n        if (response.status === 400) {\r\n            throw new Error(\"Неверный логин или пароль\");\r\n        }\r\n        return response.json();\r\n    });\r\n}\r\n\r\n// Загружает картинку в облако, возвращает url загруженной картинки\r\nfunction uploadImage({ file }) {\r\n    const data = new FormData();\r\n    data.append(\"file\", file);\r\n\r\n    return fetch(baseHost + \"/api/upload/image\", {\r\n        method: \"POST\",\r\n        body: data,\r\n    }).then(response => {\r\n        return response.json();\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./api.js?");

/***/ }),

/***/ "./auth.js":
/*!*****************!*\
  !*** ./auth.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setUser: () => (/* binding */ setUser),\n/* harmony export */   userState: () => (/* binding */ userState)\n/* harmony export */ });\n/* harmony import */ var _core_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/state.js */ \"./core/state.js\");\n\r\n\r\nconst getUserFromLocalStorage = () => {\r\n    try {\r\n        return JSON.parse(window.localStorage.user);\r\n    } catch (error) {\r\n        return null;\r\n    }\r\n};\r\n\r\nlet userState = (0,_core_state_js__WEBPACK_IMPORTED_MODULE_0__.createState)(getUserFromLocalStorage());\r\n\r\nconst setUser = value => {\r\n    userState.set(value);\r\n    if (value) {\r\n        window.localStorage.user = JSON.stringify(userState.get());\r\n    } else {\r\n        delete window.localStorage.user;\r\n    }    \r\n};\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./auth.js?");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeader: () => (/* binding */ renderHeader)\n/* harmony export */ });\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.js */ \"./auth.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes.js */ \"./routes.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./components/utils.js\");\n\r\n\r\n\r\n\r\n\r\nconst renderHeader = () => {\r\n    const element = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.fromHTML)(\r\n        `<div class=\"header-container\">\r\n            <div class=\"page-header\">\r\n                <h1 class=\"logo\">instapro</h1>\r\n                <button class=\"header-button add-or-login-button\">\r\n                ${\r\n                    _auth_js__WEBPACK_IMPORTED_MODULE_0__.userState.get()\r\n                        ? `<div title=\"Добавить пост\" class=\"add-post-sign\"></div>`\r\n                        : \"Войти\"\r\n                }\r\n                </button>\r\n                ${\r\n                    _auth_js__WEBPACK_IMPORTED_MODULE_0__.userState.get()\r\n                        ? `<button title=\"${_auth_js__WEBPACK_IMPORTED_MODULE_0__.userState.get().name}\" class=\"header-button logout-button\">Выйти</button>`\r\n                        : \"\"\r\n                }  \r\n            </div>\r\n        </div>`\r\n    );\r\n\r\n    element\r\n        .querySelector(\".add-or-login-button\")\r\n        .addEventListener(\"click\", () => {\r\n            if (_auth_js__WEBPACK_IMPORTED_MODULE_0__.userState.get()) {\r\n                (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_2__.ADD_POSTS_PAGE);\r\n            } else {\r\n                (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_2__.LOGIN_PAGE);\r\n            }\r\n        });\r\n\r\n    element.querySelector(\".logo\").addEventListener(\"click\", () => {\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_2__.POSTS_PAGE);\r\n    });\r\n\r\n    element.querySelector(\".logout-button\")?.addEventListener(\"click\", () => {\r\n        (0,_auth_js__WEBPACK_IMPORTED_MODULE_0__.setUser)(null);       \r\n    });\r\n\r\n    return element;\r\n};\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/header.js?");

/***/ }),

/***/ "./components/loading.js":
/*!*******************************!*\
  !*** ./components/loading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLoading: () => (/* binding */ renderLoading)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./components/utils.js\");\n\r\n\r\nconst renderLoading = () =>\r\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.fromHTML)(`\r\n        <div class=\"loading-container\">\r\n            <div class=\"loading-page\">\r\n                <div class=\"loader\">\r\n                <div></div>\r\n                <div></div>\r\n                <div></div>\r\n            </div>\r\n        </div>`);\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/loading.js?");

/***/ }),

/***/ "./components/pages/add-post-page.js":
/*!*******************************************!*\
  !*** ./components/pages/add-post-page.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAddPostPageComponent: () => (/* binding */ renderAddPostPageComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api.js */ \"./api.js\");\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth.js */ \"./auth.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index.js */ \"./index.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes.js */ \"./routes.js\");\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.js */ \"./components/pages/page.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils.js */ \"./components/utils.js\");\n/* harmony import */ var _upload_image_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../upload-image.js */ \"./components/upload-image.js\");\n/* harmony import */ var _core_effect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/effect.js */ \"./core/effect.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderAddPostPageComponent = () => {\r\n  let imageUrl = '';\r\n\r\n  (0,_core_effect_js__WEBPACK_IMPORTED_MODULE_7__.registerEffect)(() => {      \r\n      if(!_auth_js__WEBPACK_IMPORTED_MODULE_1__.userState.get()){\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n      }\r\n  }, _auth_js__WEBPACK_IMPORTED_MODULE_1__.userState);\r\n\r\n\r\n  return () => {\r\n    const form = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.fromHTML)(`\r\n      <div class=\"form\">\r\n        <h3 class=\"form-title\">\r\n          Добавить пост\r\n        </h3>\r\n        <div class=\"form-inputs\">\r\n          <div class=\"upload-image-container\"></div>\r\n          <textarea class=\"description-input input textarea\" rows=\"4\"></textarea>\r\n          <button class=\"add-button button\">Добавить</button>\r\n          <div class=\"form-error\"></div>\r\n        </div>\r\n      </div>\r\n      `\r\n    );\r\n\r\n    (0,_upload_image_js__WEBPACK_IMPORTED_MODULE_6__.renderUploadImageComponent)({\r\n      element: form.querySelector(\".upload-image-container\"),\r\n      onImageUrlChange(newImageUrl) {\r\n          imageUrl = newImageUrl;\r\n      },\r\n    });\r\n\r\n    const setError = message => form.querySelector(\".form-error\").textContent = message;\r\n\r\n    form.querySelector(\".add-button\").addEventListener('click', () => {\r\n      setError('');\r\n\r\n      const description = form.querySelector(\".description-input\").value;\r\n      \r\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.createPost)(description, imageUrl)\r\n      .then(() => (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE))\r\n      .catch(error => setError(error.message));\r\n    });\r\n\r\n    const page = (0,_page_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)(form);\r\n    return page;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/pages/add-post-page.js?");

/***/ }),

/***/ "./components/pages/login-page.js":
/*!****************************************!*\
  !*** ./components/pages/login-page.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLoginPage: () => (/* binding */ renderLoginPage)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api.js */ \"./api.js\");\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth.js */ \"./auth.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index.js */ \"./index.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes.js */ \"./routes.js\");\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.js */ \"./components/pages/page.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils.js */ \"./components/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderLoginPage = () => {\r\n    return () => {\r\n        const form = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.fromHTML)(`\r\n            <div class=\"form\">\r\n                <h3 class=\"form-title\">\r\n                    Вход в Instapro\r\n                </h3>\r\n                <div class=\"form-inputs\">\r\n                    <input type=\"text\" class=\"login-input input\" placeholder=\"Логин\" />\r\n                    <input type=\"password\" class=\"password-input input\" placeholder=\"Пароль\" />\r\n                    \r\n                    <div class=\"form-error\"></div>\r\n                    \r\n                    <button class=\"login-button button\">Войти</button>\r\n                </div>\r\n            \r\n                <div class=\"form-footer\">\r\n                    <p class=\"form-footer-title\">\r\n                        Нет аккаунта?\r\n                        <button class=\"link-button toggle-button\">\r\n                            Зарегистрироваться.\r\n                        </button>\r\n                    </p>\r\n                </div>\r\n            </div>`);\r\n\r\n        const page = (0,_page_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)(form);\r\n\r\n        const setError = message => form.querySelector(\".form-error\").textContent = message;        \r\n\r\n        form.querySelector(\".login-button\").addEventListener(\"click\", () => {\r\n            setError(\"\");\r\n\r\n            const login = form.querySelector(\".login-input\").value;\r\n            const password = form.querySelector(\".password-input\").value;\r\n\r\n            if (!login) {\r\n                alert(\"Введите логин\");\r\n                return;\r\n            }\r\n\r\n            if (!password) {\r\n                alert(\"Введите пароль\");\r\n                return;\r\n            }\r\n\r\n            (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)({\r\n                login: login,\r\n                password: password,\r\n            })\r\n            .then(userData => {\r\n                (0,_auth_js__WEBPACK_IMPORTED_MODULE_1__.setUser)(userData.user);\r\n                (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n            })\r\n            .catch(error => {\r\n                console.error(error);\r\n                setError(error.message);\r\n            });\r\n        });\r\n\r\n        form.querySelector('.toggle-button').addEventListener('click', () => {\r\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_3__.REGISTER_PAGE);\r\n        });\r\n\r\n        return page;\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/pages/login-page.js?");

/***/ }),

/***/ "./components/pages/page.js":
/*!**********************************!*\
  !*** ./components/pages/page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPage: () => (/* binding */ renderPage)\n/* harmony export */ });\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header.js */ \"./components/header.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ \"./components/utils.js\");\n\r\n\r\n\r\nconst renderPage = (...children) => {\r\n    const element = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.fromHTML)(`\r\n        <div class=\"page-container\">\r\n        </div>`);\r\n    element.append((0,_header_js__WEBPACK_IMPORTED_MODULE_0__.renderHeader)(), ...children);\r\n    return element;\r\n};\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/pages/page.js?");

/***/ }),

/***/ "./components/pages/posts-page.js":
/*!****************************************!*\
  !*** ./components/pages/posts-page.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPostsPageComponent: () => (/* binding */ renderPostsPageComponent)\n/* harmony export */ });\n/* harmony import */ var _post_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../post-list.js */ \"./components/post-list.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.js */ \"./api.js\");\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.js */ \"./components/pages/page.js\");\n/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading.js */ \"./components/loading.js\");\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.js */ \"./auth.js\");\n/* harmony import */ var _core_effect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/effect.js */ \"./core/effect.js\");\n/* harmony import */ var _core_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/state.js */ \"./core/state.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction renderPostsPageComponent() {\r\n    let isLoading = (0,_core_state_js__WEBPACK_IMPORTED_MODULE_6__.createState)(true);\r\n    let statePosts = (0,_core_state_js__WEBPACK_IMPORTED_MODULE_6__.createState)([]);\r\n    let _renderPostList = (0,_post_list_js__WEBPACK_IMPORTED_MODULE_0__.renderPostList)({statePosts, withHeader: true});\r\n\r\n    const reloadData = () => {\r\n        isLoading.set(true);\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getPosts)().then(data => {\r\n            isLoading.set(false);\r\n            statePosts.set(data);\r\n        });\r\n    }\r\n    \r\n    ;(0,_core_effect_js__WEBPACK_IMPORTED_MODULE_5__.registerEffect)(reloadData, _auth_js__WEBPACK_IMPORTED_MODULE_4__.userState);\r\n    \r\n    reloadData();\r\n    \r\n    return () => {\r\n        const content = isLoading.get() ? (0,_loading_js__WEBPACK_IMPORTED_MODULE_3__.renderLoading)() : _renderPostList();\r\n        const page = (0,_page_js__WEBPACK_IMPORTED_MODULE_2__.renderPage)(content);\r\n        return page;\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/pages/posts-page.js?");

/***/ }),

/***/ "./components/pages/register-page.js":
/*!*******************************************!*\
  !*** ./components/pages/register-page.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderRegisterPage: () => (/* binding */ renderRegisterPage)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api.js */ \"./api.js\");\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth.js */ \"./auth.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index.js */ \"./index.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes.js */ \"./routes.js\");\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.js */ \"./components/pages/page.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils.js */ \"./components/utils.js\");\n/* harmony import */ var _upload_image_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../upload-image.js */ \"./components/upload-image.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderRegisterPage = () => {\r\n    let imageUrl = '';\r\n    \r\n    return () => {\r\n        const form = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.fromHTML)(`\r\n            <div class=\"form\">\r\n                <h3 class=\"form-title\">\r\n                    Регистрация в Instapro\r\n                </h3>\r\n                <div class=\"form-inputs\">\r\n                    <div class=\"upload-image-container\"></div>\r\n                    <input type=\"text\" class=\"name-input input\" placeholder=\"Имя\" />\r\n                    <input type=\"text\" class=\"login-input input\" placeholder=\"Логин\" />\r\n                    <input type=\"password\" class=\"password-input input\" placeholder=\"Пароль\" />\r\n                    \r\n                    <div class=\"form-error\"></div>\r\n                    \r\n                    <button class=\"login-button button\">Зарегистрироваться</button>\r\n                </div>\r\n            \r\n                <div class=\"form-footer\">\r\n                    <p class=\"form-footer-title\">\r\n                        Уже есть аккаунт?\r\n                        <button class=\"link-button toggle-button\" >\r\n                            Войти.\r\n                        </button>\r\n                    </p>\r\n                </div>\r\n            </div>`);\r\n\r\n        const page = (0,_page_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)(form);\r\n\r\n        const setError = message => form.querySelector(\".form-error\").textContent = message;\r\n\r\n        (0,_upload_image_js__WEBPACK_IMPORTED_MODULE_6__.renderUploadImageComponent)({\r\n            element: form.querySelector(\".upload-image-container\"),\r\n            onImageUrlChange(newImageUrl) {\r\n                imageUrl = newImageUrl;\r\n            },\r\n        });\r\n\r\n        form.querySelector(\".login-button\").addEventListener(\"click\", () => {\r\n            setError(\"\");\r\n\r\n            const login = form.querySelector('.login-input').value;\r\n            const name = form.querySelector('.name-input').value;\r\n            const password = form.querySelector('.password-input').value;\r\n            if (!name) {\r\n                alert(\"Введите имя\");\r\n                return;\r\n            }\r\n            if (!login) {\r\n                alert(\"Введите логин\");\r\n                return;\r\n            }\r\n\r\n            if (!password) {\r\n                alert(\"Введите пароль\");\r\n                return;\r\n            }\r\n\r\n            if (!imageUrl) {\r\n                alert(\"Не выбрана фотография\");\r\n                return;\r\n            }\r\n\r\n            (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)({\r\n                login: login,\r\n                password: password,\r\n                name: name,\r\n                imageUrl,\r\n            })\r\n            .then(user => {\r\n                (0,_auth_js__WEBPACK_IMPORTED_MODULE_1__.setUser)(user.user);\r\n            })\r\n            .catch(error => {\r\n                console.error(error);\r\n                setError(error.message);\r\n            });\r\n\r\n        });\r\n\r\n        form.querySelector('.toggle-button').addEventListener('click', () => {\r\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_3__.LOGIN_PAGE);\r\n        });\r\n\r\n        return page;\r\n    }\r\n}\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/pages/register-page.js?");

/***/ }),

/***/ "./components/pages/user-page.js":
/*!***************************************!*\
  !*** ./components/pages/user-page.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderUserPageComponent: () => (/* binding */ renderUserPageComponent)\n/* harmony export */ });\n/* harmony import */ var _post_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../post-list.js */ \"./components/post-list.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.js */ \"./api.js\");\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.js */ \"./components/pages/page.js\");\n/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading.js */ \"./components/loading.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ \"./components/utils.js\");\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.js */ \"./auth.js\");\n/* harmony import */ var _core_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/state.js */ \"./core/state.js\");\n/* harmony import */ var _core_effect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/effect.js */ \"./core/effect.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction renderUserPageComponent(userInfo) {\r\n    let isLoading = (0,_core_state_js__WEBPACK_IMPORTED_MODULE_6__.createState)(true);\r\n    let statePosts = (0,_core_state_js__WEBPACK_IMPORTED_MODULE_6__.createState)([]);\r\n    let _renderPostList = (0,_post_list_js__WEBPACK_IMPORTED_MODULE_0__.renderPostList)({statePosts, withHeader: false});\r\n\r\n    const reloadData = () => {\r\n        isLoading.set(true);\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getUserPosts)(userInfo.id).then(data => {\r\n            isLoading.set(false);\r\n            statePosts.set(data);\r\n        });\r\n    }\r\n    \r\n    ;(0,_core_effect_js__WEBPACK_IMPORTED_MODULE_7__.registerEffect)(reloadData, _auth_js__WEBPACK_IMPORTED_MODULE_5__.userState);\r\n\r\n    reloadData();\r\n\r\n    return () => {\r\n        const banner = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.fromHTML)(\r\n            `<div class=\"user-page-header\">\r\n                <img src=\"${userInfo.imageUrl}\" class=\"user-page__user-image\">\r\n                <p class=\"user-page__user-name\">${userInfo.name}</p>\r\n            </div>`\r\n        );\r\n        const content = isLoading.get() ? (0,_loading_js__WEBPACK_IMPORTED_MODULE_3__.renderLoading)() : _renderPostList();\r\n        const page = (0,_page_js__WEBPACK_IMPORTED_MODULE_2__.renderPage)(banner, content);\r\n        return page;\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/pages/user-page.js?");

/***/ }),

/***/ "./components/post-list-control-panel.js":
/*!***********************************************!*\
  !*** ./components/post-list-control-panel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPostListControlPanel: () => (/* binding */ renderPostListControlPanel),\n/* harmony export */   sortFunctions: () => (/* binding */ sortFunctions)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./components/utils.js\");\n\r\n\r\nconst sortFunctions = {\r\n    newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),\r\n    oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),\r\n    popular: (a, b) => b.likes.length - a.likes.length\r\n};\r\n\r\n\r\nconst renderPostListControlPanel = (stateSortOrder) => {\r\n\r\n    return () => {\r\n        const element = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.fromHTML)(`\r\n            <div class=\"post-list__control-panel\">                    \r\n                <button class=\"link-button sort-button ${stateSortOrder.get() === sortFunctions.newest ? 'active-option' : ''}\" data-sort=\"newest\">новые</button>\r\n                <button class=\"link-button sort-button ${stateSortOrder.get() === sortFunctions.oldest ? 'active-option' : ''}\" data-sort=\"oldest\">старые</button>\r\n                <button class=\"link-button sort-button ${stateSortOrder.get() === sortFunctions.popular ? 'active-option' : ''}\" data-sort=\"popular\">популярные</button>\r\n            </div>\r\n        `);\r\n\r\n        for(let button of element.querySelectorAll('.sort-button')){\r\n            button.addEventListener('click', event => {            \r\n                stateSortOrder.set(sortFunctions[event.target.dataset.sort]);\r\n            });\r\n        }\r\n\r\n        return element;\r\n    }\r\n}\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/post-list-control-panel.js?");

/***/ }),

/***/ "./components/post-list.js":
/*!*********************************!*\
  !*** ./components/post-list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPostList: () => (/* binding */ renderPostList)\n/* harmony export */ });\n/* harmony import */ var _core_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/state.js */ \"./core/state.js\");\n/* harmony import */ var _post_list_control_panel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-list-control-panel.js */ \"./components/post-list-control-panel.js\");\n/* harmony import */ var _post_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.js */ \"./components/post.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./components/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderPostList = ({statePosts, withHeader}) => {\r\n    let stateSortOrder = (0,_core_state_js__WEBPACK_IMPORTED_MODULE_0__.createState)(_post_list_control_panel_js__WEBPACK_IMPORTED_MODULE_1__.sortFunctions.newest);\r\n    let controlPannel = (0,_post_list_control_panel_js__WEBPACK_IMPORTED_MODULE_1__.renderPostListControlPanel)(stateSortOrder);\r\n    \r\n    return () => {\r\n        const element = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.fromHTML)(`<div/>`);\r\n        const postList = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.fromHTML)('<ul class=\"posts\"/>');\r\n        element.append(\r\n            controlPannel(),\r\n            postList\r\n        );\r\n        \r\n\r\n        const onPostChanged = post => {\r\n            const index = statePosts.get().findIndex(p => p.id === post.id);\r\n            if (index >= 0) {\r\n                let newPosts = statePosts.get();\r\n                newPosts[index] = post;\r\n                statePosts.set(newPosts);\r\n            }\r\n        };\r\n\r\n        postList.append(\r\n            ...statePosts.get()\r\n            .sort(stateSortOrder.get())\r\n            .map(post => (0,_post_js__WEBPACK_IMPORTED_MODULE_2__.renederPost)({post, onPostChanged, withHeader}))\r\n        );\r\n\r\n        return element;\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/post-list.js?");

/***/ }),

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renederPost: () => (/* binding */ renederPost)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./api.js\");\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.js */ \"./auth.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes.js */ \"./routes.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ \"./components/utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst renederPost = ({post, onPostChanged, withHeader = true}) => {\r\n    const likeImage = `./assets/images/${post.isLiked ? \"like-active.svg\" : \"like-not-active.svg\"}`;\r\n\r\n    /**\r\n     * TODO: чтобы отформатировать дату создания поста в виде \"19 минут назад\"\r\n     * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow\r\n     */\r\n    const element = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.fromHTML)(`\r\n        <li class=\"post\">\r\n            ${withHeader \r\n                ? `<div class=\"post-header\">\r\n                        <img src=\"${post.user.imageUrl}\" class=\"post-header__user-image\">\r\n                        <p class=\"post-header__user-name\">${post.user.name}</p>\r\n                    </div>`\r\n                : ``\r\n            }            \r\n            <div class=\"post-image-container\">\r\n                <img class=\"post-image\" src=\"${post.imageUrl}\">\r\n            </div>\r\n            <div class=\"post-likes\">\r\n                <button data-post-id=\"${post.id}\" class=\"like-button\">\r\n                    <img src=\"${likeImage}\">\r\n                </button>\r\n                <p class=\"post-likes-text\">\r\n                    Нравится: <strong>${post.likes.length}</strong>\r\n                </p>\r\n            </div>\r\n            <p class=\"post-text\">\r\n                <span class=\"user-name\">${post.user.name}</span>\r\n                ${post.description}\r\n            </p>\r\n            <p class=\"post-date\">\r\n                ${ post.createdAt}\r\n            </p>\r\n        </li>`);\r\n\r\n    \r\n    element.querySelector(\".like-button\").addEventListener(\"click\", (event) => {\r\n        if(!_auth_js__WEBPACK_IMPORTED_MODULE_1__.userState.get()){\r\n            alert('Войдите, чтобы лайкать');\r\n            return;\r\n        }\r\n        \r\n        event.target.classList.add('loading-like');\r\n        \r\n        const action = post.isLiked ? (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.dislikePost)(post.id) : (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.likePost)(post.id);\r\n        action.then(p => {\r\n            event.target.classList.remove('loading-like');\r\n            if (onPostChanged) {\r\n                onPostChanged(p);\r\n            }\r\n        });\r\n    });\r\n\r\n    element.querySelector(\".post-header\")?.addEventListener(\"click\", () => {\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE, post.user);\r\n    });\r\n\r\n    return element;\r\n};\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/post.js?");

/***/ }),

/***/ "./components/upload-image.js":
/*!************************************!*\
  !*** ./components/upload-image.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderUploadImageComponent: () => (/* binding */ renderUploadImageComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./api.js\");\n\r\n\r\nfunction renderUploadImageComponent({ element, onImageUrlChange }) {\r\n    let imageUrl = \"\";\r\n\r\n    const render = () => {\r\n        element.innerHTML = `\r\n          <div class=\"upload=image\">\r\n              ${\r\n                  imageUrl\r\n                      ? `\r\n                  <div class=\"file-upload-image-conrainer\">\r\n                    <img class=\"file-upload-image\" src=\"${imageUrl}\">\r\n                    <button class=\"file-upload-remove-button button\">Заменить фото</button>\r\n                  </div>\r\n                  `\r\n                      : `\r\n                    <label class=\"file-upload-label secondary-button\">\r\n                        <input\r\n                          type=\"file\"\r\n                          class=\"file-upload-input\"\r\n                          style=\"display:none\"\r\n                        />\r\n                        Выберите фото\r\n                    </label>\r\n                  \r\n              `\r\n              }\r\n          </div>\r\n        `;\r\n\r\n        const fileInputElement = element.querySelector(\".file-upload-input\");\r\n\r\n        fileInputElement?.addEventListener(\"change\", () => {\r\n            const file = fileInputElement.files[0];\r\n            if (file) {\r\n                const lableEl = document.querySelector(\".file-upload-label\");\r\n                lableEl.setAttribute(\"disabled\", true);\r\n                lableEl.textContent = \"Загружаю файл...\";\r\n                (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.uploadImage)({ file }).then(({ fileUrl }) => {\r\n                    imageUrl = fileUrl;\r\n                    onImageUrlChange(imageUrl);\r\n                    render();\r\n                });\r\n            }\r\n        });\r\n\r\n        element\r\n            .querySelector(\".file-upload-remove-button\")\r\n            ?.addEventListener(\"click\", () => {\r\n                imageUrl = \"\";\r\n                onImageUrlChange(imageUrl);\r\n                render();\r\n            });\r\n    };\r\n\r\n    render();\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/upload-image.js?");

/***/ }),

/***/ "./components/utils.js":
/*!*****************************!*\
  !*** ./components/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromHTML: () => (/* binding */ fromHTML)\n/* harmony export */ });\nconst fromHTML = html => {\r\n    const fragment = document.createElement(\"fragment\");\r\n    fragment.innerHTML = html;\r\n    return fragment.children.length === 1 ? fragment.children[0] : fragment;\r\n};\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/utils.js?");

/***/ }),

/***/ "./core/effect.js":
/*!************************!*\
  !*** ./core/effect.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearEffects: () => (/* binding */ clearEffects),\n/* harmony export */   fireEffect: () => (/* binding */ fireEffect),\n/* harmony export */   registerEffect: () => (/* binding */ registerEffect)\n/* harmony export */ });\nconst effectMap = new Map();\r\n\r\nconst registerEffect = (handler, key) => {\r\n    let handlerList = effectMap.get(key);\r\n    if(!handlerList){\r\n        handlerList = [];\r\n        effectMap.set(key, handlerList);\r\n    }\r\n    handlerList.push(handler);\r\n}\r\n\r\nconst fireEffect = (key) => {\r\n    let handlerList = effectMap.get(key);\r\n    if(!handlerList){\r\n        return;\r\n    }\r\n    for (let i = 0; i < handlerList.length; i++) {\r\n        handlerList[i]();        \r\n    }\r\n}\r\n\r\nconst clearEffects = () => effectMap.clear();\n\n//# sourceURL=webpack://webdev-cw-instapro/./core/effect.js?");

/***/ }),

/***/ "./core/render.js":
/*!************************!*\
  !*** ./core/render.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountRootComponent: () => (/* binding */ mountRootComponent),\n/* harmony export */   scheduleRenderRoot: () => (/* binding */ scheduleRenderRoot),\n/* harmony export */   setRootElement: () => (/* binding */ setRootElement)\n/* harmony export */ });\n/* harmony import */ var _effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./effect.js */ \"./core/effect.js\");\n\r\n\r\nlet rootElement;\r\nconst setRootElement = element => rootElement = element;\r\n\r\nlet rootRenderFunction;\r\nconst mountRootComponent = rootComponentFunction => {\r\n    (0,_effect_js__WEBPACK_IMPORTED_MODULE_0__.clearEffects)();\r\n    rootRenderFunction = rootComponentFunction();\r\n    renderRoot();\r\n}\r\n\r\nconst renderRoot = () => {     \r\n    if(rootRenderFunction) {\r\n        rootElement.replaceChildren(rootRenderFunction());\r\n    }\r\n};\r\n\r\n//защита от over rendering'а\r\nlet renderTimeout;\r\nconst scheduleRenderRoot = () => {\r\n    clearTimeout(renderTimeout);\r\n    renderTimeout = setTimeout(renderRoot, 3);\r\n}\n\n//# sourceURL=webpack://webdev-cw-instapro/./core/render.js?");

/***/ }),

/***/ "./core/state.js":
/*!***********************!*\
  !*** ./core/state.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createState: () => (/* binding */ createState)\n/* harmony export */ });\n/* harmony import */ var _effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./effect.js */ \"./core/effect.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./core/render.js\");\n\r\n\r\n\r\nfunction createState (initialValue) {\r\n    let value = initialValue;\r\n    \r\n    const result = {        \r\n        set(v){\r\n            value = v;\r\n            (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.scheduleRenderRoot)();\r\n            (0,_effect_js__WEBPACK_IMPORTED_MODULE_0__.fireEffect)(this);\r\n        },\r\n        get(){\r\n            return value;\r\n        }\r\n    }\r\n    \r\n    return result;\r\n}\n\n//# sourceURL=webpack://webdev-cw-instapro/./core/state.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   goToPage: () => (/* binding */ goToPage)\n/* harmony export */ });\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes.js */ \"./routes.js\");\n/* harmony import */ var _components_pages_add_post_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/add-post-page.js */ \"./components/pages/add-post-page.js\");\n/* harmony import */ var _components_pages_posts_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/posts-page.js */ \"./components/pages/posts-page.js\");\n/* harmony import */ var _components_pages_user_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/user-page.js */ \"./components/pages/user-page.js\");\n/* harmony import */ var _components_pages_login_page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/login-page.js */ \"./components/pages/login-page.js\");\n/* harmony import */ var _components_pages_register_page_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/register-page.js */ \"./components/pages/register-page.js\");\n/* harmony import */ var _core_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/render.js */ \"./core/render.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst navigationData = {};\r\nnavigationData[_routes_js__WEBPACK_IMPORTED_MODULE_0__.LOGIN_PAGE]      = _components_pages_login_page_js__WEBPACK_IMPORTED_MODULE_4__.renderLoginPage;\r\nnavigationData[_routes_js__WEBPACK_IMPORTED_MODULE_0__.REGISTER_PAGE]   = _components_pages_register_page_js__WEBPACK_IMPORTED_MODULE_5__.renderRegisterPage;\r\nnavigationData[_routes_js__WEBPACK_IMPORTED_MODULE_0__.POSTS_PAGE]      = _components_pages_posts_page_js__WEBPACK_IMPORTED_MODULE_2__.renderPostsPageComponent;\r\nnavigationData[_routes_js__WEBPACK_IMPORTED_MODULE_0__.USER_POSTS_PAGE] = _components_pages_user_page_js__WEBPACK_IMPORTED_MODULE_3__.renderUserPageComponent;\r\nnavigationData[_routes_js__WEBPACK_IMPORTED_MODULE_0__.ADD_POSTS_PAGE]  = _components_pages_add_post_page_js__WEBPACK_IMPORTED_MODULE_1__.renderAddPostPageComponent;\r\n\r\n\r\nconst goToPage = (page, data) => {\r\n    const pageFunction = navigationData[page];\r\n    if(!pageFunction){\r\n        throw new Error(\"страницы не существует\");    \r\n    }\r\n\r\n    (0,_core_render_js__WEBPACK_IMPORTED_MODULE_6__.mountRootComponent)(() => pageFunction(data));\r\n};\r\n\r\n\r\n(0,_core_render_js__WEBPACK_IMPORTED_MODULE_6__.setRootElement)(document.getElementById(\"app\"));\r\ngoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_0__.POSTS_PAGE);\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./index.js?");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_POSTS_PAGE: () => (/* binding */ ADD_POSTS_PAGE),\n/* harmony export */   AUTH_PAGE: () => (/* binding */ AUTH_PAGE),\n/* harmony export */   LOADING_PAGE: () => (/* binding */ LOADING_PAGE),\n/* harmony export */   LOGIN_PAGE: () => (/* binding */ LOGIN_PAGE),\n/* harmony export */   POSTS_PAGE: () => (/* binding */ POSTS_PAGE),\n/* harmony export */   REGISTER_PAGE: () => (/* binding */ REGISTER_PAGE),\n/* harmony export */   USER_POSTS_PAGE: () => (/* binding */ USER_POSTS_PAGE)\n/* harmony export */ });\n// Файл со списком страниц приложения\r\nconst POSTS_PAGE = \"posts\";\r\nconst USER_POSTS_PAGE = \"user-posts\";\r\nconst AUTH_PAGE = \"auth\";\r\nconst LOGIN_PAGE = \"login\";\r\nconst REGISTER_PAGE = \"register\";\r\nconst ADD_POSTS_PAGE = \"add-post\";\r\nconst LOADING_PAGE = \"loading\";\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;