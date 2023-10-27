import React, {useState} from 'react';
import "../admin.css"


function EducationForm() {
    // Initialize state for form input values
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [result, setResult] = useState("");
    const [des, setDes] = useState("");

    // Event handlers to update state when input values change
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleSubTitleChange = (e) => setSubTitle(e.target.value);
    const handleResultChange = (e) => setResult(e.target.value);
    const handleDesChange = (e) => setDes(e.target.value);

    return (
        <form>
            <div>
                <label htmlFor="title">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div>
                <label htmlFor="subTitle">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={subTitle}
                    onChange={handleSubTitleChange}
                />
            </div>
            <div>
                <label htmlFor="result">Address:</label>
                <input
                    type="text"
                    id="result"
                    value={result}
                    onChange={handleResultChange}
                />
            </div>
            <div>
                <button className="submit-button">Submit</button>

            </div>
        </form>
    )
}

export default EducationForm;