// Create component for radio input
export default function Radio(props) {
    const {htmlFor, label, id, name, required, type } = props;

     return (
      <fieldset>
       <label
        htmlFor={htmlFor}
        label={label}
       >
        <input
         id={htmlFor}
         name={name || null}
         required={required || null}
         type='radio'
        />
        {label}
       </label>
      </fieldset>
     );
   }