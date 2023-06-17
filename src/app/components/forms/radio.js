// Create component for radio input
export default function Radio(props) {
    const {htmlFor, label, id, name, value, required, type } = props;

     return (
       <label
        htmlFor={htmlFor}
        label={label}
       >
        <input
         id={htmlFor}
         name={name || null}
        value ={value}
         type='radio'
        />
        {label}
       </label>
     );
   }