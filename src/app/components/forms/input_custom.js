// component for input
export default function CustomInput(props) {
    const {haslabel,htmlFor,label,id,maxLength,minLength,name,placeholder,required,step,size,type,disabled} = props;
     return (
      <>
       <label
        haslabel={haslabel}
        htmlFor={htmlFor}
        label={label}
       />
        {label}
        <input
         id={htmlFor}
         maxLength={maxLength || null}
         minLength={minLength || null}
         name={name || null}
         placeholder={placeholder || null}
         required={required || null}
         step={step || null}
         size={size}
         type={type || 'text'}
         disabled={disabled}
        />
      </>
     );
   }