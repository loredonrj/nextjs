import Checkbox from "./components/forms/checkbox";
import Input from "./components/forms/input";
import Label from "./components/forms/label";

export default function Home(){
  return (
    <fieldset>

    <div>
    <Checkbox
     id="horns" name="horns" label="horns"
    />
    <Input
     haslabel='true' label='Name (4 to 8 characters)' required='true' type='text' name="input-box" size="10"
    />
   </div>
    
    </fieldset>
);
}
