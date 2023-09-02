import "./keyboard.css"
import Button from "./Button/Button"

const Keyboard = ({ keys }) => {

    const data = keys.map(({ text, id }) => {
        return <Button text={text} key={id} />
    })

    return <div className="keyboard">
        {data}
    </div>
}


export default Keyboard