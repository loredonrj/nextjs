// Create component for label
export default function Label(props)  {
    const {haslabel,htmlFor} = props;
     if ({haslabel} === 'true') {
      return <label htmlFor={htmlFor}></label>
     }
   }