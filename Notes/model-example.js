/* Model Example - to remember the sunyax */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Pre-define sub-documents..
var subCategory = new Schema({
    name: String,
    description: String,
    isActive: Boolean});

var subAnswers = new Schema({
    answerText: String,
    isCorrect: Boolean,
    displayOrder: Number});

var subQuestions = new Schema({
    type: { type: String},
    text: String,
    answers: [ subAnswers ] });

// Define main document schema..
var quizSchema = new Schema({
    name: String,
    description: String,
    categories: [ subCategory ], 
    questions: [ subQuestions ] 
});
