import './QuestionForm.css'

import { useState } from 'react';

export default function QuestionForm({ action }) {
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.question);
        action(e.target.question.value)
    }

    return (
        <form className="Question" onSubmit={handleSubmit}>
            <input id="question" type="text" placeholder="Ask me anything" required />
            <button type="submit">Ask</button>
    </form>)
}