import { Component } from "react"
import Button from "../Button"
import "./keyboard.css"


class Keyboard extends Component {

    render() {
        const { keys } = this.props
        const data = keys.map(({ text, id }) => {
            return <Button text={text} key={id} />
        })

        return <div className="keyboard">
            {data}
        </div>

    }
}




export default Keyboard