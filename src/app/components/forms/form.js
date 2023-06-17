export default function Form(props){
    const {htmlFor,legend,method,action,type,value,text} = props;
    return (
    <fieldset>
        <label
        htmlFor={htmlFor}
        legend={legend}
        >
        {legend}
        </label>
        <form method={method} action={action}>
        <input
        type='submit'
        value={value}
        />
        </form>
    </fieldset>
);
}