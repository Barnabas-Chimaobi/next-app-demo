import React from 'react'
import { AdminLayout } from '../../../Layouts/adminLayout/adminLayout'
import { Breadcrumb, Layout, Menu } from 'antd';
import { colors } from '../../../utils/colors';
import { useDispatch, useSelector } from 'react-redux'
import { SAVE_DYNAMIC_FORM_SETUP } from '../../../api/mutations/adminMutation';
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import { Typography, Space, Divider, Button, Input } from "antd";

const { Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;

export default function index() {
    let [fieldname, setfieldname] = React.useState("");
    let [field_type, setfieldtype] = React.useState("");
    let [field_label, setfieldlabel] = React.useState("");
    let [section, setSection] = React.useState("");
    let [sessions, setSession] = React.useState("");
    let [programmes, setProgramme] = React.useState("");
    let [formList, setFormList] = React.useState([])
    let [completeFormList, setCompleteFormList] = React.useState({})
    const programme = useSelector(state => state.schoolSetup.programme);
    const session = useSelector(state => state.schoolSetup.session);
    const faculty = useSelector(state => state.schoolSetup.faculty);
    const user = useSelector(state => state.user.userDetails)

    const [setupForm, { loading: setupLoading, error: setupError, data: setupData }] = useMutation(SAVE_DYNAMIC_FORM_SETUP);

    const implementAddField = () => {

        var formSection = document.createElement('h4')
        var formGroup = document.createElement('div')
        var formLabel = document.createElement('label')

        formSection.className = 'label-control text-black mt-3'
        formLabel.className = "label-control text-black"
        formGroup.className = "form-group mb-3"
  
        var getFormPreviewSection = document.getElementById("form_preview")
        var addElement = document.createElement('div');
        addElement.className = "col-sm-6 mb-3"
  
        //create input
        var inputElement = document.createElement('input')
        inputElement.className = "form-control"
        inputElement.setAttribute('type', field_type)
    
        getFormPreviewSection.appendChild(addElement)
        addElement.appendChild(formSection)
        addElement.appendChild(formGroup)
        formGroup.appendChild(formLabel)
        addElement.appendChild(inputElement);
        formSection.innerHTML = section
        formLabel.innerHTML = field_label
        pushFormParameters()
    }

    const handleLabel = (event) => {
        const target = event.target.value;
        setfieldlabel(target);
        console.log(fieldname)
    };

    const handleSession = (event) => {
        let index = event.target.selectedIndex;
	    let el = event.target.childNodes[index]
	    let option =  el.getAttribute('id');  
	    console.log('Name, Code', event.target.value, option); 

        const target = event.target.value;
        setSession(JSON.parse(option));
        console.log(fieldname)
    };

    const handleProgramme = (event) => {
        const target = event.target.value;
        let index = event.target.selectedIndex;
	    let el = event.target.childNodes[index]
	    let option =  el.getAttribute('id');  
        setProgramme(JSON.parse(option));
        console.log(fieldname)
    };

    const handleSection = (event) => {
        const target = event.target.value;
        setSection(target);
    };

    const handleName = (event) => {
        const target = event.target.value;
        setfieldname(target);
        console.log(fieldname)
    };
  
    const handleInputType = (event) => {
        const target = event.target.value;
        setfieldtype(target);
        console.log(fieldname)
    };

    const pushFormParameters = () => {
        formList.push(
             {
                    input_type: field_type,
                    label: field_label,
                    name: fieldname,
                    sectionTitle: section
                 }
              )
 
        let formObject = {
            fieldDetails: formList,
            programmeId:programmes,
            sessionId: sessions,
            userId: 2,
        }

        setCompleteFormList(formObject)
        console.log(formObject, 'formlist====object======')
    }

    const submitFormSetup = async () => {
        const form = await setupForm({variables: {
           model: completeFormList
        }})
        console.log(form, 'form====submitted==')
    }
      
    if(setupError){console.log(JSON.stringify(setupError, null, 3), 'errormutatiincoureseee==sssss=====') }
    // if(loginLoading){console.log(loginLoading, 'loginloadinggsss====')}
      if(setupData){
        router.push('./admin/applicationSetup')
        console.log(setupData, 'logindataaaaass====')
      }

      console.log(programme, 'programme====codess====')
      console.log(session, 'session====codess====')
      console.log(faculty, 'faculty====codess====')
      console.log(user, 'user===userr====')

  
  return (
      <AdminLayout>
    <div>
         <div className=' container bg-light pb-5 pl-2 pt-2'>
            <div className=' container bg-white pb-3'>
                <div className='container mt-5 mb-5 '>
                    <h4 className='text-dark pt-3 pl-4'>Application Dynamic Setup</h4>
                    <form className='pl-4 pr-4'>
                        <div className='form-row row'>
                            <div className='form-group col-lg-3'>
                                <label
                                    className='label-control'
                                    style={{
                                    fontFamily: "Montserrat",
                                    fontSize: "14px",
                                    marginBottom: 10,
                                    // line-height: 38px;
                                    color: "#000",
                                    }}>
                                    Form Section
                                </label>
                                {/* <label className='label-control'>Form Section</label> */}
                                <select  onChange={handleSection} id="" className="form-control">
                                    <option selected>Bio-Data</option>
                                    <option>Bio-Data</option>
                                    <option>D.O.B</option>
                                </select>
                               
                            </div>
                            <div className='form-group col-lg-3'>
                                <label
                                    style={{
                                    fontFamily: "Montserrat",
                                    fontSize: "14px",
                                    marginBottom: 10,
                                    // line-height: 38px;
                                    color: "#000",
                                    }}>
                                        Field Type
                                </label>
                                    <select  onChange={handleInputType} id="" className="form-control">
                                    <option selected>REGULAR</option>
                                    <option>Text..</option>
                                    <option>Number..</option>
                                    <option>Email..</option>
                                </select>
                            </div>
                            <div className='form-group col-lg-3'>
                                <label    
                                    style={{
                                    fontFamily: "Montserrat",
                                    fontSize: "14px",
                                    marginBottom: 10,
                                    // line-height: 38px;
                                    color: "#000",
                                    }}>Field Name</label>
                                <select  onChange={handleName} id="" className="form-control">
                                    <option selected>--</option>
                                    <option>First Name</option>
                                    <option>Last Name</option>
                                </select>
                            </div>
                            <div className='form-group col-lg-3'>
                                <label    
                                    style={{
                                    fontFamily: "Montserrat",
                                    fontSize: "14px",
                                    marginBottom: 10,
                                    // line-height: 38px;
                                    color: "#000",
                                    }}>Field Label</label>
                                <select  onChange={handleLabel} id="" className="form-control">
                                    <option selected>--</option>
                                    <option>First Name</option>
                                    <option>Last Name</option>
                                </select>
                               
                            </div>
                            <div className='form-group col-lg-3'>
                                <label    
                                    style={{
                                    fontFamily: "Montserrat",
                                    fontSize: "14px",
                                    marginBottom: 10,
                                    // line-height: 38px;
                                    color: "#000",
                                    }}>Session</label>
                                    <div>
                                        <select  onChange={handleSession} id="" className="form-control">
                                        {/* <option selected>--</option> */}
                                        {session?.map((item, index) => {
                                            return (
                                                <option id={item.id} key={index} selected>{item?.name}</option>
                                            )
                                        })}
                                        </select>
                                    </div>
                               
                            </div>
                            <div className='form-group col-lg-3'>
                                <label    
                                    style={{
                                    fontFamily: "Montserrat",
                                    fontSize: "14px",
                                    marginBottom: 10,
                                    // line-height: 38px;
                                    color: "#000",
                                    }}>Programme</label>
                                <select  onChange={handleProgramme} id="" className="form-control">
                                    {/* <option selected>--</option> */}
                                    { session?.map((item, index) => {
                                            return (
                                                <option id={item.id} key={index} selected>{item?.name}</option>
                                            )
                                        })}
                                </select>
                               
                            </div>

                        </div>
                    </form>
                    <div className='text-right'>
                        <button onClick={implementAddField} className='bg-success text-white p-2 border-success rounded pr-4'>Save & Continue</button>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row' id="form_preview">

                        

                </div>

            </div>
            <div className='text-right'>
                        <Button onClick={submitFormSetup} className='bg-success text-white p-2 border-success rounded pr-4 pb-2'>Submit</Button>
            </div>
            {/* <div className='container bg-white pb-3 mt-4 pt-4'>
                <h4 className='mt-4 pl-4'>Student Bio-Data</h4>
                <form className='mt-4 pl-4 pr-4'>
                    <div className='row'>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="form-group">
                                <label htmlFor="name">Birth Date</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label className='' htmlFor="name">State Of Origin </label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Sex</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Religion</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Disability</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="form-group">
                                <label htmlFor="name">State of Birth</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">City of Residence</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Phone Number</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Permanent Residence</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">If others, specify</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </div>            
                </form>
                <div className='text-right pr-4'>
                    <button className='bg-success text-white p-2 border-success rounded'>Next</button>
                </div>
            </div> */}

        </div>
      
    </div>
    </AdminLayout>
  )
}
