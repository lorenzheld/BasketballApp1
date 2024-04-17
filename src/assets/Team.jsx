import {useState} from "react";

export default function Team({label, name, setName, points, setPoints}) {

    //const [points, setPoints] = useState(0);
    //const [name, setName] = useState("");

    function OnClickButtonEvent() {
        
        setPoints(points + Math.floor(Math.random()*3)+1);
    }

    return (
        <>

            <label>
                {label}
            </label>
            <input
                type="text"
                value={name}
                onChange={e => {setName(e.target.value)}}
            />
            <label>Points</label>
            <input
                type={"button"}
                value={points}
                readOnly

            />
            <input
            type="button"
            value="Throw"
            onClick={() => OnClickButtonEvent() }
            />
        </>
    )

}