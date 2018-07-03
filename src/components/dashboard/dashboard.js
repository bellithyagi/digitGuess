import React, { Component } from 'react';

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            digit: 5,
            matched: '',
            changeName: 'Bhagya',
        }
        this.checkNumber = this.checkNumber.bind(this);
    }

    checkNumber(val){
        if(parseInt(val) === this.state.digit){
            this.setState({
                matched: true
            })
        } else {
            this.setState({
                matched: false
            })
        }
    }
    render(){
        setTimeout(() => {
            this.setState({
                changeName: 'Belli'
            }), 10000000000000
        })
        return(
          <div>
            Dashboard
            <div className="form-group">
              <input type="text" className="form-control" onBlur={
                  (e) => {
                      this.checkNumber(e.currentTarget.value)
                  }
              }/>
              <button className="btn btn-primary" type="button">Check</button>
            </div>
            {this.state.matched && <span>You guessed right!</span>}
            <h3>{this.state.changeName}</h3>
          </div>
        )
    }

}

export default Dashboard;

