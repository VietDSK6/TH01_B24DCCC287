import React from "react";

const QuizQuestion = ({
	question,
	options,
	selectedAnswer,
	onAnswerChange,
	questionIndex,
}) => {
	return (
		<div className="quiz-question">
			<h3>{question}</h3>
			<div className="quiz-options">
				{options.map((option, index) => (
					<button
						key={index}
						className={`option-btn ${
							selectedAnswer === index ? "selected" : ""
						}`}
						onClick={() => onAnswerChange(questionIndex, index)}>
						{option}
					</button>
				))}
			</div>
		</div>
	);
};

export default QuizQuestion;