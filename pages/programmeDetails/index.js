import React, {useState} from "react";
import ProgressCard from "../Application/progressCard";
import PersonDetails from "./personDetails";
import Olevel from "./olevel";
import Education from "./education";
import Documents from "./documents";
import Programme from "./programme";


export default function index() {
    const [show, setShow] = useState('personDetails')

  const toggleTabs = (key) => {
        console.log(key, 'gfhjiojhvgcfhjiopjihugvjkhgvjk')
      switch (key) {
          case 'personDetails':
              setShow(key)
              break;
          case 'olevel':
              setShow(key)
              break;
          case 'education':
              setShow(key)
              break;
          case 'documents':
              setShow(key)
              break;
          case 'programme':
              setShow(key)
              break;
          default:
              break;
      }
  }
  return (
    <div>
      <div className="d-block container mt-3 mb-3">
        <div className=" container ">
          <h2 className>Application Form</h2>
          <p>HND FULL TIME</p>
        </div>
      </div>
      <div className="container d-lg-flex">
        <div className="col-lg-8 col-sm-12">
          {/* mini nav */}
           <center>
           <div className="row pb-4">
                <div className="col-lg-3">
                    <a onClick={() => toggleTabs('personDetails')}  style={{textDecoration: "none", color: "black"}}><i class="fa-solid fa-user"></i>Personal Details</a>
                </div>
                <div className="col-lg-2">
                    <a  onClick={() => toggleTabs('olevel')} style={{textDecoration: "none", color: "black"}}><i class="fa-solid fa-file"></i>O'Level</a> 
                </div>
                <div className="col-lg-2">
                    <a onClick={() => toggleTabs('education')}  style={{textDecoration: "none", color: "black"}}><i class="fa-solid fa-building-columns"></i>Education</a>
                </div>
                <div className="col-lg-2">
                    <a onClick={() => toggleTabs('documents')}  style={{textDecoration: "none", color: "black"}}><i class="fa-solid fa-copy"></i>Documents</a>
                </div>
                <div className="col-lg-2">
                    <a onClick={() => toggleTabs('programme')}  style={{textDecoration: "none", color: "black"}}><i class="fa-solid fa-book-open"></i>Programme</a>  
                </div>
            </div>
           </center>

          {/* Personal deets */}
          {show == 'personDetails' && <PersonDetails />
          }

          {/* O-level */}
          { show == 'olevel' && <Olevel />
          }
          
          {/* education */}
          {show == 'education' && <Education />
          }
          
          {/* documents */}
          {show == 'documents' && <Documents />
          }
         
          {/* Programme */}
          {show == 'programme' && <Programme />
          }
          
        </div>
        <ProgressCard />
      </div>
    </div>
  );
}
