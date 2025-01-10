# your-cocktail

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


Great! It seems like you have successfully set up your Nuxt.js app with the provided package.json file. Now, let's continue with implementing the functionality for each page and component based on the requirements you mentioned.

1. **Create the necessary components:**

   Inside the `components` directory, create the following components:

   - `Header.vue` - Component for the header section.
   - `Sidebar.vue` - Component for the left sidebar.
   - `Content.vue` - Component for the main content section.
   - `ItemCard.vue` - Component for displaying an item card.
   - `SignInForm.vue` - Component for the sign-in form.
   - `RegisterForm.vue` - Component for the registration form.
   - `AddItemForm.vue` - Component for the form to add a new cocktail.
   - `EditItemForm.vue` - Component for the form to edit a cocktail.
   - `DetailsModal.vue` - Component for displaying the detailed item information in a modal.

2. **Implement the functionality for each page and component:**

   - **SignIn.vue:**
     - Use the `SignInForm` component to display the sign-in form.
     - Implement the logic to check the entered user data and authenticate the user.
     - Show error messages if the user data is incorrect.

   - **Register.vue:**
     - Use the `RegisterForm` component to display the registration form.
     - Implement the logic to check the entered user data and register a new user.
     - Show error messages if any of the required fields are empty or if the email is already in use.

   - **Main.vue:**
     - Use the `Header`, `Sidebar`, and `Content` components to structure the main page layout.
     - Implement the logic to fetch data from the external API and store it in the component's data.
     - Implement the filtering functionality based on the selected options in the sidebar.
     - Display the filtered results and user's list using the `ItemCard` component.
     - Implement the actions for adding/removing items from the user's list and marking favorites using the appropriate icons in the `ItemCard` component.
     - Implement the infinite scroll or pagination functionality to load more items from the user's list.

   - **NotFound.vue:**
     - Display a custom 404 page.

   - **Header.vue:**
     - Implement the header section layout with the app logo, "My list" button, "Add new" button, and "Log out" button.
     - Add event listeners to the buttons to trigger the corresponding actions.

   - **Sidebar.vue:**
     - Implement the sidebar layout with the filter sections, search by title, and filter by fields.
     - Add event listeners to the form elements to handle the filtering functionality.

   - **Content.vue:**
     - Implement the content section layout to display the search/filter results and user's list.
     - Use the `ItemCard` component to display the cocktail cards.
     - Implement the logic to handle the "Show more" button and load additional items.

   - **ItemCard.vue:**
     - Display the cocktail card with the title, heart icon, trash bin icon, and item photo.
     - Implement the logic to add/remove items from the user's list and mark favorites.
     - Implement the logic to remove an item from the user's list and show the edit modal for items created by the user.
     - Add event listeners to the icons to trigger the corresponding actions.

   - **DetailsModal.vue:**
     - Display the detailed information about the item, such as recipe, ingredients, video, etc.
     - Show the appropriate buttons (Add to My List / Remove from My List / Delete item) based on the item's status.
     - Add event listeners to the buttons to trigger the corresponding actions.
     - Implement the logic to close the modal or go back to the previous page.

   - **SignInForm.vue:**
     - Implement the sign-in form layout with email and password fields.
     - Add event listeners to handle form submission and validate user data.

   - **RegisterForm.vue:**
     - Implement the registration form layout with name, email, password, and repeat password fields.
     - Add event listeners to handle form submission and validate user data.

   - **AddItemForm.vue:**
     - Implement the form layout to add a new cocktail with the necessary fields (title, category, photo URL, recipe, custom fields, etc.).
     - Implement the logic to validate user input and handle form submission.

   - **EditItemForm.vue:**
     - Implement the form layout to edit an existing cocktail.
     - Populate the form fields with the current data of the cocktail being edited.
     - Implement the logic to validate user input and handle form submission.

3. **Style the application:**

   - Use CSS or a UI framework of your choice (e.g., Bootstrap, Tailwind CSS) to style the components and create a visually appealing layout.

4. **Test the application:**

   - Test each page and component to ensure all functionality works as expected.
   - Verify that the data is fetched correctly from the external API and displayed in the components.
   - Test user authentication, registration, and authorization.
   - Test filtering, sorting, and pagination functionality.
   - Verify that actions like adding/removing items from the user's list, marking favorites, and deleting items work as intended.
   - Ensure the modals and forms behave correctly and validate user input.

These steps provide a general outline of how you can implement the functionality for your online cocktail catalog in a Nuxt.js 2 project. Feel free to adapt and customize the implementation based on your specific project requirements and preferences.
