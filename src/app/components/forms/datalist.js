// Datalist input Component
export default function Datalist(props) {
    const {options,key,value,haslabel,htmlFor,defaultValue,id,name,required,disabled} = props;

     // Get all options from option prop
     const dataOptions = {options}.split(', ');
   
     // Generate list of options
     const dataOptionsList = dataOptions.map((dataOption, index) => {
      return <option key={index} value={dataOption} />
     });
   
     return (
      <fieldset>
       <Label
        haslabel={haslabel}
        htmlFor={htmlFor}
        label={label}
       />
    
       <input list={htmlFor} />
    
       <datalist
        defaultValue=''
        id={htmlFor}
        name={name || null}
        required={required || null}
       >
        <option value='' disabled>Select one option</option>
   
        {dataOptionsList}
       </datalist>
      </fieldset>
     );
   };