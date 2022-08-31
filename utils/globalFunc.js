import { useDispatch, useSelector } from 'react-redux'
import { fieldName, fieldType } from '../redux/reducers'

export const implementAddField = () => {
    
    var formGroup = document.createElement('div')
    var formLabel = document.createElement('label')
    
    formLabel.className = "label-control"
    formGroup.className = "form-group mb-3"

    var getFormPreviewSection = document.getElementById("form_preview")
    var addElement = document.createElement('div');
    addElement.className = "col-sm-6 mb-3"

    //create input
    var inputElement = document.createElement('input')
    inputElement.className = "form-control"
    inputElement.setAttribute('type', field_type)

    getFormPreviewSection.appendChild(addElement)
    addElement.appendChild(formGroup)
    formGroup.appendChild(formLabel)
    addElement.appendChild(inputElement);
    formLabel.innerHTML = field_label

}

export const handleLabel = (event) => {
   //  const dispatch = useDispatch()

   console.log(event.target.value, 'targetvalue====')
   const target = event.target.value;
   // dispatch(fieldName(target))
//    setfieldlabel(target);
   console.log(fieldname)
};

export const handleInputType = (event) => {
const target = event.target.value;
// setfieldtype(target);
console.log(fieldname)
};