// component for checkbox input
export default function CustomCheckbox (props) {
    const {htmlFor,label,id,name,value,required,type,isChecked} = props;
     return (
      <>
       <label
        htmlFor={htmlFor}
        label={label}
       >
        <input
         id={htmlFor}
         name={name || null}
         value={value || null}
         required={required || null}
         type='checkbox'
         isChecked={isChecked}
        />
        {label}
       </label>
      </>
     );
   }