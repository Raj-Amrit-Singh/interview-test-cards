import React from 'react'
import dateDemo from './CandidateCredentials.json'
import { FetchQuestion } from './FetchQuestion.js'
import { Instructions } from './Instructions'

class datePicker extends React.Component {
    constructor(props) {
        super(props);
        this.date = new Date().toLocaleDateString();
        this.temp = dateDemo.Date[0].ExamDate;
        this.arrayDate = new Date(this.temp).toLocaleDateString();
        this.state = { counter: 0 };
        this.startTest = this.startTest.bind(this);
    }

    startTest() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        if (this.state.counter == 1) {
            return (<FetchQuestion />)
        }
        if (this.date == this.arrayDate) {
            return (<div>
                <Route path="/:id" component={List} />
                <Instructions startTest={this.startTest} /></div>)
        }
        else if (this.date <= this.arrayDate) {
            return (
                <div align="Center">
                    <p>Your Date has not arrived yet!</p>
                </div>
            );
        }
        else {
            return (<div align="Center">
                <p>Your exam date has passed!</p>
            </div>);
        }
    };
}

export default datePicker
