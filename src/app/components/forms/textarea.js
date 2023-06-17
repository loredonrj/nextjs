// Create component for textarea
export default function Textarea() {
    const {hasLabel,htmlFor,label,cols,id,name,required,rows,} = props;
     return (
        <>
       <label
        hasLabel={hasLabel}
        htmlFor={htmlFor}
        label={label}
       />
   
       <textarea
        cols={cols || null}
        id={htmlFor}
        name={name || null}
        required={required || null}
        rows={rows || null}
       >
       </textarea>
       </>

     );
   };