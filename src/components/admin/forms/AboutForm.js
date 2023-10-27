import React, {useState} from 'react';


function AboutForm() {
    const [des, setDes] = useState("");
    const handleDesChange = (e) => setDes(e.target.value);

    return (
        <form>
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

export default AboutForm;