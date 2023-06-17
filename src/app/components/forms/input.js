// Create component for input
export default function Input(props) {
    const {haslabel,htmlFor,label,id,maxlength,minlength,name,placeholder,required,step,size,type} = props;
     return (
      <>
       <label
        haslabel={haslabel}
        htmlFor={htmlFor}
        label={label}
       />
        <input
         id={htmlFor}
         maxlength={maxlength || null}
         minlength={minlength || null}
         name={name || null}
         placeholder={placeholder || null}
         required={required || null}
         step={step || null}
         size={size}
         type={type || 'text'}
        />
        {label}
      </>
     );
   }