import { useState } from 'react';
import { quizQuestions } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const question = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === question.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring" }}
        >
          <Award className={`w-24 h-24 mx-auto mb-6 ${percentage >= 70 ? 'text-emerald-500' : percentage >= 40 ? 'text-amber-500' : 'text-red-500'}`} />
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Quiz Complete!</h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            You scored <span className="font-bold text-2xl text-slate-900 dark:text-white">{score}</span> out of {quizQuestions.length} ({percentage}%)
          </p>
          
          <button 
            onClick={handleRestart}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            <RotateCcw size={20} />
            Retake Quiz
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 dark:border-slate-700 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </span>
        <span className="text-sm font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">
          Score: {score}
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="h-full bg-red-600 dark:bg-red-500"
          initial={{ width: `${(currentQuestionIndex / quizQuestions.length) * 100}%` }}
          animate={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 leading-snug">
            {question.question}
          </h3>

          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = index === question.correctAnswerIndex;
              
              let buttonStyle = "bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";
              let Icon = null;
              
              if (isAnswered) {
                if (isCorrect) {
                  buttonStyle = "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-700 dark:text-emerald-400 font-medium";
                  Icon = CheckCircle2;
                } else if (isSelected) {
                  buttonStyle = "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400 font-medium";
                  Icon = XCircle;
                } else {
                  buttonStyle = "bg-slate-50 dark:bg-slate-900/20 opacity-50 border-transparent text-slate-500";
                }
              } else if (isSelected) {
                buttonStyle = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${buttonStyle}`}
                >
                  <span className="text-lg">{option}</span>
                  {Icon && <Icon className={isCorrect ? "text-emerald-500" : "text-red-500"} size={24} />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl mb-8 ${selectedOption === question.correctAnswerIndex ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200'}`}
            >
              <p className="font-medium">
                {selectedOption === question.correctAnswerIndex ? 'Correct! ' : 'Incorrect. '}
                {question.explanation}
              </p>
            </motion.div>
          )}

          {isAnswered && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                {isLastQuestion ? 'View Results' : 'Next Question'}
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
