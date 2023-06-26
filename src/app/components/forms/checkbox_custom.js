// Create component for checkbox input
export default function CustomCheckbox (props) {
    const {htmlFor,label,id,ischecked,name,value,required,type} = props;
     return (
      <>
       <label
        htmlFor={htmlFor}
        label={label}
       >
        <input
             id={htmlFor}
             ischecked={ischecked}
         name={name || null}
         value={value}
         required={required || null}
         type='checkbox'
        />
        {label}
       </label>
      </>
     );
   }