import React, { useState } from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import Header from './Header';

export default function AddCourseDetails() {

    const [text, setText] = useState('Hello world');
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    const handleChange = (value) => {
        console.log(value)
        setText(value);
    }
    const save = () => {
       localStorage.setItem('course',text);
    }
    return (
        <div>
            <Header />
            <div className='container mt-6'>
                <ReactQuill value={text} style={{ height: '20rem' }}
                    modules={modules}
                    formats={formats}
                    onChange={(e) => { handleChange(e) }}
                />
                <button className='btn btn-success mt-5' onClick={() => { save() }}>Save</button>
            </div>
        </div>
    )
}
