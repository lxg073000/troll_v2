# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Firebase 9.6

- Uses a new API surface designed where Object Oriented approach for method calls is replaced by Functional Method exports to facilitate tree-shaking (removal of unused code) to make your web app as small and fast as possible.

# global auth

## AuthContext

- create context to store global user state of {user, authIsReady}
- authReducer updates state based on dispatching LOGIN, LOGOUT, AUTH_IS_READY (firebase initial auth check)

# Custom React Hooks

## AuthHooks

- useAuthContext used to get the current user

## UseCollection

- get real-time updates on a specific collection and an optional query and ordering
- returns documents and error

## useFirestore

- uses firestoreReducer to to update initial state {documentRef:string, isPending:bool, error:obj, success:bool}
- returns addDocument(), deleteDocument(), initial state : response

## useLogin

- logs in user with email and password
- returns login(),

## useLogout

- logs out current user, returns logout()

## useSignup

- signs up user with email, password, and displayName
- return signup()

# React Router DOM v6

-

# MVPs

## User Online Status

- Firebase update user document syncs online field when logging in/out
- use realtime data to fetch and display all users and indicate if they are currently online

#### **`OnlineUsers.js`**

```javascript
{
  users &&
    users.map((user) => (
      <div key={user.id} className="user-list-item">
        {user.online && <span className="online-user"></span>}
        <span>{user.displayName}</span>
        <Avatar photoURL={user.photoURL} />
      </div>
    ));
}
```

#### **`useSignup.js`**

```javascript
const _docRef = await doc(db, `users/${res.user.uid}`);
const _data = { online: true, displayName, photoURL: snapURL };
setDoc(_docRef, _data);
```

#### **`useLogin.js`**

```javascript
const docRef = await doc(db, `users/${res.user.uid}`);
updateDoc(docRef, { online: true });
```

#### **`useLogout.js`**

```javascript
const docRef = await doc(db, `users/${user.uid}`);
await updateDoc(docRef, { online: false });
```

## Authentication Guards & Redirects

- Page views perform redirects for authenticated or unauthenticated routes via reactRouter v6 Navigate JSX
- Conditionally render Navbar Links

# Application Data

## Users

- Online status, photoURL

## Projects

- Create Projects by assigning a name, details, category, and collaborators
  - Renders collaborators from realtime list of all users in database
  - Include server side form error handling for required field
