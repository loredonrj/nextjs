// Select input Component

export default function Select(props) {

    const {key,value,haslabel,htmlFor,label,defaultValue,id,name,required,disabled,options} = props;
     
    // Get all options from option prop
     const selectOptions = this.props.options.split(', ');
   
     // Generate list of options
     const selectOptionsList = selectOptions.map((selectOption, index) => {
      return <option key={index} value={index}>{selectOption}</option>
     });
   
     return (
        <>
       <Label
        haslabel={haslabel}
        htmlFor={htmlFor}
        label={label}
       />
    
       <select
        defaultValue=''
        id={htmlFor}
        name={name || null}
        required={required || null}
       >
        <option value='' disabled>Select one option</option>
   
        {selectOptionsList}
       </select>
       </>
     );
   };