import React from 'react';
import './HomeMainbar.css';
import { Link, useLocation } from 'react-router-dom';

const HomeMainbar = () => {
    const questionsList = [{
        id: 1,
        votes: 3,
        noOfAnswers: 2,
        questionTitle: 'What is a function?',
        questionBody: 'It meant to be',
        questionTags: ['JavaScript', 'node js', 'react js', 'mongodb', 'html', 'css', 'express js'],
        userPosted: 'samar',
        time: 'july 27'
    }, {
        id: 2,
        votes: 0,
        noOfAnswers: 0,
        questionTitle: 'What is a function?',
        questionBody: 'It meant to be',
        questionTags: ['java', 'pyhton', 'R'],
        userPosted: 'sekhar',
        time: 'july 30'
    }, {
        id: 3,
        votes: 1,
        noOfAnswers: 0,
        questionTitle: 'What is a object?',
        questionBody: 'It meant to be',
        questionTags: ['javascript', 'react js', 'python'],
        userPosted: '',
        time: 'august 2'
    }]
    return (
        <div>
        </div>
    )
}

export default HomeMainbar;