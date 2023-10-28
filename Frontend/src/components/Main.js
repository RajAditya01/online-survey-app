import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    return (
        <div className='container'>
            <h1 className='title text-light'>Online Survey Application</h1>

            <p></p>

            <section className='paragraph'> 
            <p>
            Welcome to the survey!
            </p>

            <p>
                Here are the rules:
            </p>
            </section>
            <ol>
                <li>You will be asked 10 questions one after another.</li>
                <li>10 points will be awarded for each correct answer.</li>
                <li>Each question has three options, and you can choose only one option.</li>
                <li>You can review and change your answers before the survey finishes.</li>
                <li>The result will be declared at the end of the survey.</li>
            </ol>
            <p className='paragraph' >Thank you for participating!</p>

            <form id="form">
                <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
            </form>

            <div className='start'>
                <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Survey</Link>
            </div>
        </div>
    );
}