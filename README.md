# Troll

> SUMMARY: A productivity application for managing and monitoring goals

> TECHNOLOGIES: React.js, React Hooks, React Context, Javascript, Node.js, Firebase, HTML, CSS, and additional libraries...

## React.js & React Hooks

- useReducer
- useContext

## Firebase 9.6

- firebase/auth, firebase/storage, firebase/firestore
- Manage Backend auth, database, storage, validations
<!-- - Uses a new API surface designed where Object Oriented approach for method calls is replaced by Functional Method exports to facilitate tree-shaking (removal of unused code) to make your web app as small and fast as possible. -->

## Additional Libraries

### React-Router-DOM 6.2

- The react-router-dom package contains bindings for using React Router in web applications.

### React-Select 5.2

- A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.

### Date-FNS 2.28

- Date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.

### AuthContext

- create context to store global user state of {user, authIsReady}
- authReducer updates state based on dispatching LOGIN, LOGOUT, AUTH_IS_READY (firebase initial auth check)

## React Hooks

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
- Read Projects from firestore database and display in list form
  - Details page for each project id
- Filter Projects by owner and category

### Comments

- Users can create comments using the ProjectComments component
- ProjectComments are displayed from realtime firebase collection

# Firestore Rules

- User Documents
  - Validate auth to create & read
  - Validate ownership to update
- Project Documents
  - Validate auth to create, read, update
  - Validate ownership to delete
