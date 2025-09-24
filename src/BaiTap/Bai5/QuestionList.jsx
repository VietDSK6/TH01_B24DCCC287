import React, { useState } from "react";
import QuizQuestion from "./Question";

const QuizApp = () => {
	const [questions] = useState([
		{
			question: "ReactJS dùng để làm gì?",
			options: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
			correctAnswer: 1,
		},
		{
			question: "Props trong React là gì?",
			options: ["Trạng thái", "Thuộc tính truyền vào", "API", "CSS"],
			correctAnswer: 1,
		},
		{
			question: "State dùng để?",
			options: [
				"Quản lý dữ liệu thay đổi",
				"Định nghĩa component",
				"Kết nối backend",
				"Trang trí giao diện",
			],
			correctAnswer: 0,
		},
	]);

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [userAnswers, setUserAnswers] = useState({});
	const [showResult, setShowResult] = useState(false);

	const handleAnswerChange = (questionIndex, selectedOption) => {
		const newAnswers = {
			...userAnswers,
			[questionIndex]: selectedOption,
		};
		setUserAnswers(newAnswers);

		if (questionIndex < questions.length - 1) {
			setTimeout(() => {
				setCurrentQuestionIndex(questionIndex + 1);
			}, 500);
		} else {
			setTimeout(() => {
				setShowResult(true);
			}, 500);
		}
	};

	const calculateScore = () => {
		let correct = 0;
		questions.forEach((question, index) => {
			if (userAnswers[index] === question.correctAnswer) {
				correct++;
			}
		});
		return correct;
	};

	const resetQuiz = () => {
		setUserAnswers({});
		setShowResult(false);
		setCurrentQuestionIndex(0);
	};

	return (
		<div className="exercise">
			<h2>Bài 5: Quiz App</h2>

			{!showResult ? (
				<div className="quiz-container">
					<div className="quiz-progress">
						<p>
							Câu {currentQuestionIndex + 1}/{questions.length}
						</p>
					</div>

					<QuizQuestion
						question={questions[currentQuestionIndex].question}
						options={questions[currentQuestionIndex].options}
						selectedAnswer={userAnswers[currentQuestionIndex]}
						onAnswerChange={handleAnswerChange}
						questionIndex={currentQuestionIndex}
					/>
				</div>
			) : (
				<div className="quiz-result">
					<h3>Kết quả Quiz</h3>
					<p className="score">
						Bạn trả lời đúng {calculateScore()}/{questions.length}{" "}
						câu.
					</p>

					<div className="result-details">
						{questions.map((q, index) => (
							<div key={index} className="result-item">
								<p>
									<strong>{q.question}</strong>
								</p>
								<p
									className={
										userAnswers[index] === q.correctAnswer
											? "correct"
											: "incorrect"
									}>
									Bạn chọn: {q.options[userAnswers[index]]}
									{userAnswers[index] === q.correctAnswer
										? " ✓"
										: " ✗"}
								</p>
								{userAnswers[index] !== q.correctAnswer && (
									<p className="correct-answer">
										Đáp án đúng:{" "}
										{q.options[q.correctAnswer]}
									</p>
								)}
							</div>
						))}
					</div>

					<button className="reset-btn" onClick={resetQuiz}>
						Làm lại
					</button>
				</div>
			)}
		</div>
	);
};

export default QuizApp;