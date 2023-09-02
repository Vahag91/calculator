import "./button.css"


const Button = (props)=> {
return <div className="button">
 <button> {props.text}
 </button>
</div>
}

export default Button