// Create component for checkbox input
export default function Checkbox (props) {
    const {htmlFor,label,id,name,required,type} = props;
     return (
       <label
        htmlFor={htmlFor}
        label={label}
       >
        <input
         id={htmlFor}
         name={name || null}
         required={required || null}
         type='checkbox'
        />
        {label}
       </label>
     );
   }