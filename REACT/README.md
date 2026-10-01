# React Mastery - Sessions 1 to 14

This repository contains fully functional, modular, and aesthetically styled React projects for **Sessions 1 through 14**.

---

## 📁 Repository Structure

```text
c:/java-script/REACT/
├── session-1/
│   ├── InstaCloneStarter/               # React Project (CRA structure)
│   │   ├── src/
│   │   │   ├── TrendingSong.js          # Functional component returning <h2>Trending on Spotify: Calm Down</h2>
│   │   │   ├── App.js                   # <h1>Welcome to My React Zomato App</h1> + TrendingSong component
│   │   │   ├── App.css                  # Modern styling & card layouts
│   │   │   └── index.js                 # React root entry
│   │   └── package.json
│   └── VIRTUAL_DOM_EXPLANATION.md       # Virtual DOM performance explanation
│
├── session-2/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserGreeting.js          # Functional component displaying 'Hello, {username}!'
│   │   │   ├── UserGreetingClass.js     # Class component displaying 'Hello, {username}!'
│   │   │   └── MiniProfile.js           # Instagram-style profile with valid closed JSX tags
│   │   ├── App.js                       # 'Welcome to React JSX!' + comparisons
│   │   └── App.css
│   └── package.json
│
├── session-3/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCard.js           # Styled div with prop-types (productName string, price number)
│   │   │   └── UserProfile.js           # Instagram profile with defaultProps (0 followers, default pic)
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── session-4/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LikeButton.js            # Heart icon & useState increment
│   │   │   ├── CartItem.js              # Flipkart-style '+' and '-' quantity manager
│   │   │   ├── SongVote.js              # Spotify upvote/downvote (non-negative count)
│   │   │   └── RatingSelector.js        # Zomato 5-star rating selector with active highlights
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── session-5/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LikeButton.js            # Simple button & count increment
│   │   │   ├── SearchBar.js             # Flipkart real-time search with live state display
│   │   │   ├── LoginForm.js             # Form with e.preventDefault(), alert credentials & auto-clear
│   │   │   └── PlaylistAdder.js         # Spotify playlist adder: song name + artist into dynamic list
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── session-6/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Playlist.js              # Renders song objects array using map()
│   │   │   ├── OrderStatus.js           # isDelivered boolean with ternary operator
│   │   │   ├── FollowerList.js          # Checks if array empty ('No followers yet') else map()
│   │   │   └── CartSummary.js           # map() items, empty state, conditional 'Checkout Now' (≥ 3 items)
│   │   ├── App.js                       # Live interactive toggle controls for testing
│   │   └── App.css
│   └── package.json
│
├── session-7/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TrendingSongs.js         # Logs 'Component mounted' with useEffect()
│   │   │   ├── IPLScoreFetcher.js       # Fetches posts from jsonplaceholder on mount -> match headline
│   │   │   ├── MovieSuggestions.js      # Fetches users on mount with loading spinner
│   │   │   └── AutoFetchNews.js         # Refactored fetch from button click to mount hook
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── session-8/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.js             # useRef auto-focus on mount
│   │   │   ├── LoginForm.js             # Controlled inputs + useRef clears & refocuses username
│   │   │   ├── AddToPlaylist.js         # Adds song + useRef refocuses input for rapid entry
│   │   │   └── FeedbackForm.js          # Controlled feedback form with focus trigger button
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── session-9/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js                # Flipkart NavLink navigation with active link highlighting
│   │   │   ├── HomePage.js              # Category strip & hero deals for '/'
│   │   │   ├── DealsPage.js             # Lightning deals for '/deals'
│   │   │   ├── CartPage.js              # Cart summary & order placement for '/cart'
│   │   │   └── NotFound.js              # Flipkart-style 404 page for wildcard '*'
│   │   ├── App.js                       # BrowserRouter & Routes configuration
│   │   └── App.css
│   └── package.json
│
├── session-10/
│   ├── src/
│   │   ├── context/
│   │   │   ├── UserContext.js           # Default username & loggedIn status + UserProvider
│   │   │   ├── ThemeContext.js          # Light & Dark theme state & toggle hook
│   │   │   └── NotificationContext.js   # AI/Copilot generated WhatsApp unread count manager
│   │   ├── components/
│   │   │   ├── Navbar.js                # Displays current username from UserContext
│   │   │   ├── ThemeToggle.js           # Switches light/dark theme
│   │   │   ├── DeepChildRefactor.js     # Refactored 3-level prop drilling to direct useContext
│   │   │   └── NotificationDemo.js      # WhatsApp unread counter interface (+1, -1, clear)
│   │   ├── App.js                       # Main wrapper updating background dynamically
│   │   └── App.css
│   └── package.json
│
├── session-11/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TrendingMovies.js        # Axios GET popular movies (first 5) + loading & error handling
│   │   │   ├── AddPlaylist.js           # Axios POST playlist name & desc to jsonplaceholder
│   │   │   ├── RestaurantSearch.js      # Axios GET restaurant directory + real-time input filter
│   │   │   └── CommentForm.js           # AI/Copilot Axios POST comment submission & response preview
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── session-12/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TrendingSongs.js         # fetch() first 3 titles, 'Error loading data' + Reload retry
│   │   │   ├── IPLScores.js             # Checks status !== 200, throws 'Error loading scores'
│   │   │   └── BuggyFetchFix.js         # Fixes classic fetch() 404 trap using response.ok & try/catch
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── session-13/
│   ├── dist/                            # Generated optimized production build
│   ├── public/
│   │   └── _redirects                   # Netlify SPA routing rules (/* /index.html 200)
│   ├── netlify.toml                     # Netlify build configuration
│   ├── src/
│   │   ├── components/
│   │   │   ├── MusicPlayer.js           # Core interactive music player
│   │   │   ├── AboutPage.js             # Netlify deployment architecture & version history
│   │   │   └── ThemeToggle.js           # Dark mode feature toggle
│   │   ├── App.js
│   │   └── App.css
│   ├── DEPLOYMENT_NETLIFY_GUIDE.md      # Step-by-step Netlify CI/CD, mobile feedback & UX review
│   └── package.json                     # Custom "homepage": "https://musicpulse-player.netlify.app"
│
└── session-14/
    ├── src/
    │   ├── components/
    │   │   ├── ProfileCard.js           # Reusable avatar, name, bio, and badge card
    │   │   ├── SocialLinks.js           # Reusable clickable icons with optional 'theme' prop
    │   │   └── ProjectCard.js           # Copilot structure preserved as comment + portfolio card
    │   ├── App.js                       # Assembled InstaBio homepage layout
    │   └── App.css                      # Instagram gradient aesthetics & responsive cards
    └── package.json
```

---

## 🚀 How to Run Any Session

Run any session directly from the root workspace or within its directory:

```bash
# Run Session 7 (useEffect & Fetch)
npm run dev:session-7

# Run Session 8 (useRef Hook)
npm run dev:session-8

# Run Session 9 (React Router DOM)
npm run dev:session-9

# Run Session 10 (Context API)
npm run dev:session-10

# Run Session 11 (Axios REST Client)
npm run dev:session-11

# Run Session 12 (Error Handling & Status Codes)
npm run dev:session-12

# Run Session 13 (Netlify Production Build App)
npm run dev:session-13

# Run Session 14 (InstaBio App)
npm run dev:session-14

# Verify Production Build across ALL sessions
npm run build:all
```

---

## 📝 Session Task Summaries

### Session 7: useEffect Hook & Side Effects
- **Task 1 (`TrendingSongs.js`)**: Uses `useEffect(() => { console.log('Component mounted'); }, [])` on initial render.
- **Task 2 (`IPLScoreFetcher.js`)**: Fetches match data from `jsonplaceholder.typicode.com/posts` on mount and displays the first post title as the current headline.
- **Task 3 (`MovieSuggestions.js`)**: Fetches users from `jsonplaceholder.typicode.com/users` on mount, showing a loading indicator until data arrives.
- **Task 4 (`AutoFetchNews.js`)**: Refactored data fetching from a button click handler to `useEffect` on mount without changing UI styling.

### Session 8: useRef Hook & Direct DOM Manipulation
- **Task 1 (`SearchBar.js`)**: Auto-focuses the input field on mount using `inputRef.current.focus()`.
- **Task 2 (`LoginForm.js`)**: Controlled username & password inputs; on submit, uses `useRef` to clear and focus the username field.
- **Task 3 (`AddToPlaylist.js`)**: Adds entered song name to playlist and uses `useRef` to refocus the input immediately for rapid entries.
- **Task 4 (`FeedbackForm.js`)**: Controlled feedback form with a dedicated button that triggers `messageRef.current.focus()`.

### Session 9: React Router DOM Navigation (Flipkart Style)
- **Task 1**: Installed `react-router-dom` and configured `BrowserRouter` in `App.js`.
- **Task 2**: Created `HomePage.js`, `DealsPage.js`, and `CartPage.js`, wired to `/`, `/deals`, and `/cart`.
- **Task 3 (`Navbar.js`)**: Built navigation bar with `NavLink` highlighting active links with distinct yellow border and background styling.
- **Task 4 (`NotFound.js`)**: Configured catch-all route (`path="*"`) simulating Flipkart's 404 page for unknown paths.

### Session 10: React Context API
- **Task 1 (`UserContext.js`)**: Context providing default `username: 'Aarav Sharma'` and `loggedIn: true`.
- **Task 2 (`Navbar.js`)**: Consumes `UserContext` via `useContext` to display the active username and status.
- **Task 3 (`ThemeContext.js`)**: Light/Dark theme toggle updating the background color and styling of the main container div.
- **Task 4 (`DeepChildRefactor.js`)**: Refactored 3-level component tree (`Grandparent` -> `Parent` -> `DeepChild`) eliminating prop drilling completely; deepest child accesses `useContext(ThemeContext)` directly.
- **Task 5 (`NotificationDemo.js`)**: Integrated AI/Copilot-generated WhatsApp unread notification counter context with `+1`, `-1`, and clear controls.

### Session 11: Axios Data Fetching & REST API Calls
- **Task 1 & 4 (`TrendingMovies.js`)**: Uses `axios.get()` to fetch trending movies (displaying first 5 titles) with loading spinner and error handling.
- **Task 2 (`AddPlaylist.js`)**: Form posting playlist name & description via `axios.post()` to `jsonplaceholder.typicode.com/posts` with success notification.
- **Task 3 (`RestaurantSearch.js`)**: Search bar using Axios GET to fetch restaurant catalog and filter results dynamically on keystroke.
- **Task 5 (`CommentForm.js`)**: Adapted AI/Copilot Axios POST request submitting `username` and `comment` to `jsonplaceholder.typicode.com/comments` and rendering server response card.

### Session 12: Network Error Handling & Status Codes
- **Task 1 & 2 (`TrendingSongs.js`)**: `fetch()` top 3 titles, displaying 'Error loading data' on failure, with 'Reload' button retrying with `try/catch`.
- **Task 3 (`IPLScores.js`)**: Fetches dummy scores from `jsonplaceholder.typicode.com/users`, verifies `response.status === 200`, throws and displays 'Error loading scores' on non-200 responses.
- **Task 4 (`BuggyFetchFix.js`)**: Fixes classic `fetch()` trap where 404/500 does not reject promise by inspecting `response.ok` inside `try/catch`.

### Session 13: Production Build & Netlify Deployment
- **Task 1**: Verified `npm run build` generates production bundle in `dist/`.
- **Task 2**: Complete Netlify dashboard deployment guide with GitHub CI/CD setup in `DEPLOYMENT_NETLIFY_GUIDE.md`.
- **Task 3**: Configured custom `"homepage": "https://musicpulse-player.netlify.app"` in `package.json` with `_redirects` and `netlify.toml` for SPA routing.
- **Task 4**: Implemented Dark Mode toggle feature and interactive `AboutPage.js`.
- **Task 5**: Conducted mobile device test review and implemented 2 UX improvements: 56px touch targets and scroll-optimized playlist queue.

### Session 14: InstaBio React App
- **Task 1 (`ProfileCard.js`)**: Reusable card displaying name, avatar URL, bio, and verified badge.
- **Task 2 & 4 (`SocialLinks.js`)**: Reusable component taking links array prop with clickable icons, accepting optional `theme` prop ('light' | 'dark') for dynamic styling.
- **Task 3 (`App.js`)**: Assembled complete InstaBio homepage layout reusing `ProfileCard`, `SocialLinks`, and `ProjectCard`.
- **Task 5 (`ProjectCard.js`)**: GitHub Copilot structure preserved as comment header before implementing reusable portfolio project cards.
