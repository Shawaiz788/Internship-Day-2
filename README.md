# 📱 React Native + Apollo GraphQL — Internship Day 2

A React Native (Expo) app built to learn Apollo Client integration with GraphQL APIs. The project is split across two branches, each covering different concepts.

---

## 🌿 Branch: `main`
### Countries Explorer — Learning `useQuery`

This branch connects to the **Countries API** (`https://countries.trevorblades.com/`) to learn how to fetch data using Apollo Client.

### What Was Built
- Login screen with email & password fields
- Signup modal with full form (username, phone, email, name, password)
- Reset password modal
- Countries list screen showing flag, name, and capital

### Key Concepts Covered

| Concept | Description |
|---|---|
| `ApolloProvider` | Wrapped the root layout to give every screen access to GraphQL |
| `useQuery` | Fetched a list of countries with name, capital, and emoji flag |
| `gql` | Wrote GraphQL query inside the JS file using template literals |
| `FlatList` | Rendered the countries list efficiently |
| Loading & Error states | Handled with `ActivityIndicator` and error text |

### GraphQL Query Used
```graphql
query {
  countries {
    name
    capital
    emoji
  }
}
```

### Setup
```bash
npm install @apollo/client graphql --legacy-peer-deps
```


https://github.com/user-attachments/assets/88dac3c2-85b6-47c0-9235-656728958005


---

## 🌿 Branch: `LoginMutation`
### Auth Flow — Learning `useMutation`, `AsyncStorage` & Token Handling

This branch connects to the **Platzi Fake Store API** (`https://api.escuelajs.co/graphql`) to implement a real authentication flow.

### What Was Built
- Real login using `useMutation` that returns a JWT token
- Token saved to device storage using `AsyncStorage`
- Token decoded on the logged-in screen to extract user ID
- User profile fetched dynamically using the extracted ID
- Logout clears the token and redirects to login


https://github.com/user-attachments/assets/3e3bdaf8-9e6e-441c-875a-54cd5edf679c


### Key Concepts Covered

| Concept | Description |
|---|---|
| `useMutation` | Sent login credentials to the server and received a JWT token |
| `AsyncStorage` | Saved and retrieved the token from device storage |
| `authLink` | Attached the token to every outgoing GraphQL request via headers |
| `setContext` | Intercepted requests to inject the `Authorization: Bearer` header |
| JWT Decode | Decoded the token in-app using `atob()` to extract the user ID |
| `useQuery` with variables | Fetched user profile dynamically using the decoded user ID |
| `skip` option | Prevented the query from running until the user ID was ready |
| `fetchPolicy: network-only` | Bypassed Apollo cache to always get fresh data |

### Auth Flow Diagram
```
User enters email & password
        ↓
  useMutation (login)
        ↓
  Receives access_token
        ↓
  AsyncStorage.setItem('token')
        ↓
  Navigate to LoggedIn screen
        ↓
  Decode token → extract user ID
        ↓
  useQuery (user by ID) + send token in header
        ↓
  Display user profile
        ↓
  Logout → AsyncStorage.removeItem('token')
```

### GraphQL Mutation Used
```graphql
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    access_token
  }
}
```

### GraphQL Query Used
```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    email
    name
    avatar
  }
}
```

### Token Attached to Every Request (`_layout.tsx`)
```ts
const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})
```

### Setup
```bash
npm install @apollo/client graphql --legacy-peer-deps
npx expo install @react-native-async-storage/async-storage
```

### Test Credentials
```
email:    john@mail.com
password: changeme
```

---

## 🗂 Project Structure
```
app/
├── _layout.tsx          ← ApolloProvider + auth header setup
├── loggedin.tsx         ← Profile screen (LoginMutation branch)
└── (tabs)/
    ├── _layout.tsx      ← Tab navigator
    ├── login.tsx        ← Login + Signup + Reset modals
    └── home.tsx         ← Countries list (main branch)
```

---

## 📦 Dependencies
```json
"@apollo/client": "^3.11.8",
"graphql": "*",
"@react-native-async-storage/async-storage": "*"
```

---

> Built during Internship Day 2 — learning Apollo GraphQL integration in React Native with Expo Router.
