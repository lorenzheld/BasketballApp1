import Court from "./Court.jpg"

export default function History({points}) {

    return (
        <>
            <img src={Court} width={400} />
            <label>History</label>
            <ul>
                <li>{points}</li>
                <li>Eintrag</li>
            </ul>
            <input type={"button"}
                   value="reset"
                   onClick={ () => console.log("Reset Pressed")}
            />
        </>
    )
}