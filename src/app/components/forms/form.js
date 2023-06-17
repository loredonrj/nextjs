import Label from "./label";
import Checkbox from "./checkbox";
import Input from "./input";
import Radio from "./radio";
import Textarea from "./textarea";
import Select from "./select";
import Datalist from "./datalist";

// Form Component
export default function Form(props){
    const {htmlFor,label,method,action,type,value,text} = props;
    return (
    <fieldset>
        <label htmlFor={htmlFor} label={label}> {label} </label>
        <form method={method} action={action}>
        <Label/>
        <Checkbox/>
        <Input/>
        <Radio/>
        <Textarea/>
        <Select/>
        <Datalist/>
        <input type='submit' value={value} />
        </form>
    </fieldset>
);
}



