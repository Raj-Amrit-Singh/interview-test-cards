import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import dateDemo from './CandidateCredentials.json'
import { FetchQuestion } from './FetchQuestion.js'
import { Instructions } from './Instructions'
import queryString, { parseUrl } from 'query-string'



class datePicker extends React.Component {
    constructor(props) {
        super(props);
        this.date = new Date().toLocaleDateString();
        this.temp = dateDemo.Date[0].ExamDate;       //Replace this with the date you get by fetching candidate id
        this.getUrl = null;
        this.arrayDate = new Date(this.temp).toLocaleDateString();
        this.state = {
             counter: 0,
             candidateSchedule : {},            
            };
        this.startTest = this.startTest.bind(this);
        this.Cid = null;
        this.Sid = null;

    }


    fetchUrlParams() {
        const parsedURL = queryString.parseUrl(location.href);
        console.log(parsedURL.query.Cid)
        this.Cid = parsedURL.query.Cid;
        this.Sid = parsedURL.query.Sid;
        console.log(this.Cid + "  " + this.Sid)
        var scheduleApi = `https://trailrecruitment01-dev-ed.my.salesforce.com/services/apexrest/CandidateScheduleRestHandler/${this.Cid}`;
        let that = this; 
        var xhttp = new XMLHttpRequest();
        var token = this.Sid;
        var jsonObject;
        xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            that.setState({
                candidateSchedule : JSON.parse(this.responseText)
            })
        }
        };
        xhttp.open("GET", scheduleApi, true);
        xhttp.setRequestHeader('Authorization', 'Bearer ' + token);
        xhttp.send();
    }
    componentWillMount() {

        this.fetchUrlParams();

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

                <Instructions startTest={this.startTest} />
            </div>)
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
