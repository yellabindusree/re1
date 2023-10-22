import {Component} from "react";
import "./style.css"
class As1 extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }

    handleChange=(event)=>{
        let word=event.target.value;
        if(word==null){
            return ;
        }
        var arr=word.trim().split(/\s+/);
        this.setState({
            count:arr.length
        });
    }
    render(){
        return(
<div class="a1">
    <h1>Responsive Paragraph Word Counter</h1>
    <textarea placeholder="Enter any text........" onChange={this.handleChange}></textarea>
    <p>Word Count:{this.state.count}</p>
</div>
        );
    }
}
export default As1;