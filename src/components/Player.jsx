import { useState } from "react";

export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false)

    function handleClick() {
        setIsEditing(state => !state)
    }

    return (
        <li>
            <span className="player">
             {!isEditing && <span className="player-name">{name}</span>}
             {isEditing && <input type="text" required />}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    );
}