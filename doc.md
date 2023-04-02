Creating e-commerce website with React

## App:

1. Import components and renders them
2. Using useState and useEffect hooks to manage the products state and fetch all the products using the "productServiceFactory"
3. Wrapping the entire application with "AuthProvider", "ProductProvider" and "CartProvider"

## Services:

#### requester

1. Exports "requestFactory" function that returns object containing HTTP request methods(get/post/put/patch/delete).
2. "Requester" takes in (method,url,data) that sets appropriate options and headers and returns response
3. The X-Authorization header is set if there is a valid accessToken stored in the localStorage.

#### authService:

1. Exports a function that takes a token and return an object containing "login, register, logout" methods for performing authentication requests.

#### productService:

Used for getting all products,creating, editing, deleting and adding comments

## Reducer

#### productReducer

Used for managing the state of a single product.
Handles 2 action types:

1. "PRODUCT_FETCH" to update the product data
2. "COMMENT_ADD" to add a comment to product comments array

## Hooks

#### useForm

useForm is custom hook that takes two parameters - initialValues and onSubmitHandler
Returns object that contains the form values, changeHandler for form inputs, a submit handler for the form, and a function to change the form values

#### useLocalStorage

Initializing satte with a value stored in local storage if it exists, if not sets the new value in local storage

#### useService

Imports the useContext hook from the react library and the AuthContext from the ../contexts/AuthContext module. It then defines a custom hook useService that takes a serviceFactory function as its argument. The hook then uses the useContext hook to access the token value from the AuthContext and uses it to create and return a service object by calling the serviceFactory function with the token value.

## contexts

#### AuthContext

Exports 'AuthProvider' and 'useAuthContext'

The AuthProvider function creates a context to store authentication related data like user id, access token, email, etc. It provides functions for logging in, registering, and logging out a user using an authService and storing the authentication data in localStorage. It also uses the useNavigate hook from react-router-dom to navigate to different pages after login, registration, or logout.

The useAuthContext function is a custom hook that returns the authentication context created by AuthProvider, so it can be used in other components to access authentication data or functions.

#### CartContext

The CartProvider component uses the useState hook to manage the state of an array of items. It also provides two functions, addToCart and removeFromCart, which respectively add and remove an item to/from the items array.

The CartProvider component wraps its children in the CartContext.Provider, passing down the state and functions through the value prop. This enables any components nested within the CartProvider to access the items, addToCart, and removeFromCart values from the context, and to rerender when these values are updated.

#### ProductContext

This code exports a ProductContext and ProductProvider component which creates a context for managing products in the application. It also exports a useProductContext hook to use the context within a functional component.

The ProductProvider component uses the useState and useEffect hooks to manage the products state and fetch the products from a productService using the productServiceFactory function. It also defines functions to create, edit, and delete a product which can be used by the children components via the context.

The useProductContext hook is used to access the context values within a functional component.