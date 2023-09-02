import "./button.css"


const Button = (props)=> {

   const styles = {
      "=": "btn-green",
      "C": "btn-green",
      "<": "btn-green",
      "X": "btn-purple",
      "/": "btn-purple",
      "-": "btn-purple",
      "+": "btn-purple",
      "0": "btn-zero",
      };
  
    const style = styles[props.text] || "button";

return <div className={style}>
 <button > <span>{props.text}</span>
 </button>
</div>
}

export default Button