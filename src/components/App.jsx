import React from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { StyledContainer } from './App.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  // handleFeedback = () => {
  //   // this.setState({ counter: this.state.counter + 1 }, () => {
  //   // 	console.log(this.state.counter)
  //   // })
  //   // this.setState({ counter: this.state.counter + 1 })

  //   this.setState(state => ({
  //     good: state.good + 1,
  //   }));
  //   this.setState(state => ({
  //     neutral: state.neutral + 1,
  //   }));
  //   this.setState(state => ({
  //     bad: state.bad + 1,
  //   }));
  // };
  // handleChangeStep = e => {
  //   console.log(e.target.value);
  //   this.setState({ good: +e.target.value });
  // };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <StyledContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            handleFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statictics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </StyledContainer>
    );
  }
}
