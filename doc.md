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
