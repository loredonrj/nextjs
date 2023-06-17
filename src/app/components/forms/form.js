import Label from "./label";

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

        <input type='submit' value={value} />
        </form>
    
    
    </fieldset>
);
}



