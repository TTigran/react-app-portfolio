import React, {useState} from 'react';


function VolunteeringForm() {
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
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div>
                <label htmlFor="subTitle">Sub Title:</label>
                <input
                    type="text"
                    id="subTitle"
                    value={subTitle}
                    onChange={handleSubTitleChange}
                />
            </div>
            <div>
                <label htmlFor="result">Result:</label>
                <input
                    type="text"
                    id="result"
                    value={result}
                    onChange={handleResultChange}
                />
            </div>
            <div>
                <label htmlFor="des">Description:</label>
                <textarea
                    id="des"
                    value={des}
                    onChange={handleDesChange}
                />
            </div>
            <div>
                <button className="submit-button">Submit</button>

            </div>
        </form>
    )
}

export default VolunteeringForm;