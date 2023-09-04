import { Component } from "react";
import "./button.css"


class Button extends Component {

   render() {
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
  
    const style = styles[this.props.text] || "button";

return <div className={style}>
 <button > <span>{this.props.text}</span>
 </button>
</div>
   }
}



  


export default Button