import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

/**
 * Root application component managing friends list state and bill splitting view.
 * @returns {JSX.Element} The rendered bill splitter application interface.
 */
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  /**
   * Toggles the visibility of the Add Friend form.
   */
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  /**
   * Adds a new friend to the active list and closes the form.
   * @param {Object} friend - The new friend profile object.
   */
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

/**
 * Reusable button component.
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Inner button content.
 * @param {() => void} [props.onClick] - Optional click handler callback.
 * @returns {JSX.Element}
 */
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

/**
 * Renders the list of friends with their balances.
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.friends - Array of friend objects.
 * @returns {JSX.Element}
 */
function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

/**
 * Individual friend item displaying balance status and action trigger.
 * @param {Object} props - Component properties.
 * @param {Object} props.friend - Friend profile with name, balance, and avatar.
 * @returns {JSX.Element}
 */
function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

/**
 * Form to register a new friend into the application.
 * @param {Object} props - Component properties.
 * @param {(friend: Object) => void} props.onAddFriend - Callback when a friend is submitted.
 * @returns {JSX.Element}
 */
function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🤹‍♀️ Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🏞️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

/**
 * Form for calculating and splitting a restaurant/dining bill.
 * @returns {JSX.Element}
 */
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>🤑 Bill value</label>
      <input type="text" />

      <label>🙍‍♂️Your expense</label>
      <input type="text" />

      <label>🤹‍♀️ X's expense</label>
      <input type="text" disabled />

      <label>💎 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}