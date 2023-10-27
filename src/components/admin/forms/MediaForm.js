import React, {useState} from 'react';


function MediaForm() {
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
                <label htmlFor="title">Video:</label>
                <input
                    type="file"
                    id="video"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>

            <div>
                <button className="submit-button">Submit</button>
            </div>
        </form>
    )
}

export default MediaForm;