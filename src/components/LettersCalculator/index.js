// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
state={
    count: "",
    
    }
    
onChang = e => {
this.setState({count: e.target.value})
}



    render() {
        const {count} = this.state
        

return(
    <div className="container">
    
    <div>
        <h1> Calculate the Letters you enter</h1>
        <label htmlFor="letter"> Enter the phrase</label>
        <br/>
        <input type="text" placeholder="Enter the phrase" id="letter" className="typing" onChange={this.onChang}
        />
          <br/>
        <p type="button">No. of Letters: {count.length}</p>
      </div>

      <div className="cal-image">
        <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        alt="Letters Calculator"
        />
    </div>

    </div>

)
}
}
 export default LettersCalculator