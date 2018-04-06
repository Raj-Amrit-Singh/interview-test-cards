import React, { Component } from 'react';
import { myStyle } from '../css/Card'
export class PresentQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.qBank = props.Qbank;
    this.answerStore = props.answerStore;
    this.onButtonChange = this.onButtonChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.onButtonChange = this.onButtonChange;
    this.createButtons = this.createButtons.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.selectQuestion = this.selectQuestion.bind(this);
    this.onButtonChange = this.onButtonChange.bind(this);
    this.state = {
      currentQuestion: 0,
      currentButton: [],
      color: "white",
    };
    this.buttonElements = [];
    this.tempFlag = 0;
  }

  createButtons() {
    //myStyle.selectedButtonStyle.backgroundColor = this.state.color;
    for (let i = 1; i <= 20; i++) {
      this.buttonElements.push(
        <button id={i} key={i} onClick={() => this.selectQuestion(i)} className="btn btn-md btn-default" style={myStyle.selectedButtonStyle}>{i}</button>
      )
    }
  }

  getOptions(myOptions) {
    let temp = this.qBank[this.state.currentQuestion].Options__c;
  }

  selectQuestion(key) {
    this.setState({
      currentQuestion: key - 1,
    })
  }

  prevQuestion() {
    if (this.state.currentQuestion > 0) {
      this.setState(prevState => ({
        currentQuestion: prevState.currentQuestion - 1,
      }));
    }
  }

  nextQuestion() {
    if (this.state.currentQuestion < 19) {
      this.setState(prevState => ({
        currentQuestion: prevState.currentQuestion + 1
      }));
    }
  }

  onButtonChange(value, id, answer) {
    console.log("button change");
    let tempArray = this.state.currentButton;
    tempArray.push(value);
    this.setState((prevState) => ({
      currentButton: tempArray,
    }));
    this.answerStore(id, answer);
    console.log(this.state.currentButton);
  }

  componentWillMount() {
    this.createButtons();
  }

  toCheck(value) {
      let checkResult;
      let tempArray = this.state.currentButton;
      console.log(this.state.currentButton);
      if ((tempArray.indexOf(value)) >= 0) {
        checkResult = true;
      }
      else checkResult = false;
      console.log(checkResult);
      return checkResult;      
  }

  render() {
    let tempState = this.state.currentQuestion;
    let myValue = (tempState * 4);
    let currentStatus = this.qBank[tempState];
    return (
      <div className="card bg-light text-dark" style={myStyle.cardStyle} >
        <div className="card-header" style={myStyle.headerStyle}>{currentStatus.Question__c}</div>
        <div className="card-body" style={myStyle.bodyStyle}>
          <div className="radio">
            <label><input type="radio" name={tempState} value={myValue + 1} checked={this.toCheck(myValue + 1)} onChange={() => this.onButtonChange(myValue + 1, currentStatus.Id, currentStatus.Options__c.option1)} />
              {currentStatus.Options__c.option1}
            </label>
            <label style={{ marginLeft: "387px" }}>
              <input type="radio" name={tempState} value={myValue + 2} checked={this.toCheck(myValue + 2)} onChange={() => this.onButtonChange(myValue + 2, currentStatus.Id, currentStatus.Options__c.option2)} />
              {currentStatus.Options__c.option2}
            </label><br />
            <label><input type="radio" name={tempState} value={myValue + 3} checked={this.toCheck(myValue + 3)} onChange={() => this.onButtonChange(myValue + 3, currentStatus.Id, currentStatus.Options__c.option3)} />
              {currentStatus.Options__c.option3}
            </label>
            <label style={{ marginLeft: "387px" }}>
              <input type="radio" name={tempState} value={myValue + 4} checked={this.toCheck(myValue + 4)} onChange={() => this.onButtonChange(myValue + 4, currentStatus.Id, currentStatus.Options__c.option4)} />
              {currentStatus.Options__c.option4}
            </label>
          </div>
        </div>
        <span className="inline" style={myStyle.buttonElements}>
          {this.buttonElements}
        </span>
        <div className="card-footer" style={myStyle.footerStyle}><br />
          <button className="btn btn-default" style={myStyle.footerButtonLeft} onClick={this.prevQuestion}>Previous</button>
          <button className="btn btn-default" style={myStyle.footerButtonRight} onClick={this.nextQuestion}>Next</button>
        </div>
      </div>
    );
  }
}
//export default QuestionPage