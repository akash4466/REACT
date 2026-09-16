# React Mastery - Sessions 1 to 6

This repository contains fully functional, modular, and aesthetically styled React projects for **Sessions 1 through 6**.

---

## 📁 Repository Structure

```
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
└── session-6/
    ├── src/
    │   ├── components/
    │   │   ├── Playlist.js              # Renders song objects array using map()
    │   │   ├── OrderStatus.js           # isDelivered boolean with ternary operator
    │   │   ├── FollowerList.js          # Checks if array empty ('No followers yet') else map()
    │   │   └── CartSummary.js           # map() items, empty state, conditional 'Checkout Now' (≥ 3 items)
    │   ├── App.js                       # Live interactive toggle controls for testing
    │   └── App.css
    └── package.json
```

---

## 🚀 How to Run

You can run each session from the root repository or inside each folder:

### Option A: From the Root Directory
```bash
# Run Session 1 (InstaCloneStarter)
npm run dev:session-1

# Run Session 2 (JSX & Components)
npm run dev:session-2

# Run Session 3 (Props & PropTypes)
npm run dev:session-3

# Run Session 4 (useState Hook)
npm run dev:session-4

# Run Session 5 (Forms & Events)
npm run dev:session-5

# Run Session 6 (Lists & Conditional Rendering)
npm run dev:session-6
```

### Option B: From within any session directory
```bash
cd session-1/InstaCloneStarter
npm run dev
```

---

## 📝 Session Task Highlights

### Session 1: InstaCloneStarter & Virtual DOM
- **Heading**: `<h1>Welcome to My React Zomato App</h1>`
- **TrendingSong Component**: Functional component returning `<h2>Trending on Spotify: Calm Down</h2>`.
- **Virtual DOM Explanation**:
  > React's **Virtual DOM** is a lightweight, in-memory representation of the actual browser DOM. When a component's state or props change, React constructs a new Virtual DOM tree and compares it with the previous one using an efficient reconciliation ("diffing") algorithm. Instead of re-rendering the entire page, React calculates the exact minimal set of changes needed and batches them into a single update to the real DOM. This dramatically reduces costly browser recalculations, reflows, and repaints, resulting in much faster and smoother UI updates compared to traditional DOM manipulation.

### Session 2: JSX, Functional vs Class, and MiniProfile
- **JSX Heading**: `'Welcome to React JSX!'`
- **`UserGreeting`**: Functional component accepting `username` prop.
- **`UserGreetingClass`**: Class component equivalent comparing syntax.
- **`MiniProfile`**: Instagram-style profile card with user avatar, name, and bio, strictly following closed JSX tag rules (e.g. self-closing `<img />`).

### Session 3: Props, DefaultProps & PropTypes
- **`ProductCard`**: Accepts `productName` and `price`. Validated with `prop-types` (`PropTypes.string.isRequired`, `PropTypes.number.isRequired`).
- **`UserProfile`**: Mini Instagram profile accepting `username`, `followers`, and `profilePic`.
- **`defaultProps`**: Fallback to `0` followers and default placeholder image when props are omitted.

### Session 4: React State with useState
- **`LikeButton`**: Heart icon with counter starting at 0, incrementing on click.
- **`CartItem`**: Flipkart-style item quantity controller with `+` and `-` buttons.
- **`SongVote`**: Spotify playlist upvote/downvote with non-negative constraint (`Math.max(0, count - 1)`).
- **`RatingSelector`**: Zomato-style 5-star rating highlighting all stars up to the selected rating.

### Session 5: Forms, Controlled Inputs & State
- **`LikeButton`**: Button and count incrementer.
- **`SearchBar`**: Real-time Flipkart product search input reflecting live state below.
- **`LoginForm`**: Controlled form with `e.preventDefault()`, alerts entered credentials, and resets form inputs to empty strings without page reload.
- **`PlaylistAdder`**: Spotify-style form allowing users to enter song name and artist, appending newly submitted tracks to a live playlist list.

### Session 6: Lists & Conditional Rendering
- **`Playlist`**: Renders array of song objects with `.map()` in an unordered list (`<ul>`).
- **`OrderStatus`**: Evaluates `isDelivered` boolean prop using ternary operator: `'Order Delivered 🎉'` vs `'Order on the way 🚚'`.
- **`FollowerList`**: Conditional check: displays `'No followers yet'` if array is empty, otherwise renders the list with `.map()`.
- **`CartSummary`**: Displays cart items with `.map()`, shows `'Cart is empty'` if empty, and conditionally displays `'Checkout Now'` button only when there are 3 or more items.
