import React from 'react';
import '../css/Question.css';
import ReactMarkdown from 'react-markdown';
import MCQSingleCorrect from './question-templates/MCQSingleCorrect';
import MCQMultipleCorrect from './question-templates/MCQMultipleCorrect';
import TrueFalse from './question-templates/TrueFalse';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question
        }
    }

    render = () => {
        return (
            <>
                <div>
                <ReactMarkdown>{this.state.question.question}</ReactMarkdown>
                </div>
                {
                    this.state.question.categoryId == 3 &&
                    <TrueFalse 
                        trueFalseAnswer={this.state.question.trueFalseAnswer}
                        clearResponse={this.props.clearResponse}
                        attempted={this.state.question.attempted}
                    />
                }
                {
                    this.state.question.categoryId == 1 &&
                    <MCQSingleCorrect 
                        mcqOptions={this.state.question.mcqOptions}
                        clearResponse={this.props.clearResponse}
                        attempted={this.state.question.attempted}
                    />
                }
                {
                    this.state.question.categoryId == 2 &&
                    <MCQMultipleCorrect
                        mcqOptions={this.state.question.mcqOptions}
                        clearResponse={this.props.clearResponse}
                        attempted={this.state.question.attempted}
                    />
                }
            </>
        );
    }
}

export default Question;