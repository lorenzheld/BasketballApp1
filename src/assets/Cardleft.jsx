


export default function Cardleft(){
    function onClickButton() {
//Vorerst einfachmal einen Alert auslösen
        alert("MyButton was clicked!")
    }


    return (
        <div>
            <h3>Team 1</h3>
            <p>Card content*</p>
            <button onClick = { onClickButton } >klick mich</button>
            <p><small>*with small content</small></p>
        </div>
    )

}