import {useState} from "react";
import Input from "../components/Input.jsx";
import Title from "../components/Title.jsx";
import Button from "../components/Button.jsx";


function ReportIssue () {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [checked, setChecked] = useState(false);
    const [location, setLocation] = useState("");
    function locationChangeHandle(e){
        setLocation(e.target.value);
    }

    function titleChangeHandle(e) {
        setTitle(e.target.value);
    }
    function descriptionChangeHandle(e) {
        setDescription(e.target.value);
    }
    function checkedChangeHandle() {
        setChecked(!checked);
        console.log(checked);
    }


    return (
        <div id="report-issue-container">

            <Title text={"Submit Issue"} heading={"h1"} color={"black"} />
            <Input type="text" label={"Issue title"} onChange={titleChangeHandle} placeholder={"Broken traffic light..."} />
           <Input type="textarea" label={"Description"} onChange={descriptionChangeHandle} placeholder={"Happened at 9 am , near ..."} />
            <Input type={"file"} label={"Attachment" }
                accept=".jpg,.jpeg,.png,.gif,.pdf,image/jpeg,image/png,image/gif,application/pdf"/>
            <Input type="text" label={"Location:"}
                   onChange={locationChangeHandle} placeholder={"123 wall street..."} />
            <Input type={"checkbox"} clas="non-column-flex" label={"Do you want to share Contact info: (Optional)"} onChange={checkedChangeHandle} />
            <div id={"submit-issue-btns"}>
                <Button text={"Submit"}  />
                <Button text={"Cancel"}  />
            </div>

        </div>

    )

}
export default ReportIssue;