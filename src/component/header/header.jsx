import React, { useState } from "react";
import "./header.css";

import img from '../img/ClipboardOutlined.svg'





const Header = ({ data, importfuntion }) => {

    const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(data)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";
        link.click();
    };
    const [files, setFiles] = useState("");


    const handleChange = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");

        fileReader.onload = e => {
            var myObject = JSON.parse(e.target.result);
           
            importfuntion(myObject)

        };
    };

    return (
        <div className="header1">
            <ul className="tie1">
                <div className="imges">
                    <img src={img} height="30px" width="30px" alt="React Logo" />
                    <h6>Resume Builder</h6>
                </div>

                <div className="import1">

                    <button onClick={exportData}>Export</button>

                    <div className="data3">
                        <label for="file-input" >
                            Import
                        </label>
                        <input type="file" id="file-input"
                            onChange={handleChange}
                        />
                    </div>

                </div>
            </ul>

        </div>
    )
};
export default Header;