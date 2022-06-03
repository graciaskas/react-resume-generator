import React, { useContext} from "react";
import { UserContext } from "../contexts/User.context";

export default function Form() { 

    const userContext = useContext(UserContext);
    const { userModel, handleChange } = userContext;

    //Desctrure UserModel
    const { personal, contact, skills, work, education, certification} = userModel;
    //Destructure personal object
    const {  firstname, lastname, jobposition, objective } = personal;
    //Destructure contact Object
    const {  email, phonenumber, address, url } = contact;


    const saveChange = (event) => {
        event.preventDefault();
        //Save to localStorage 
        localStorage.setItem("userModel", JSON.stringify(userModel));
    };

    return(
        <div className="appForm">
            <form>

                {/* Personnal Information */}
                <div className="section sec-useinfo">
                    <h4>Personnal information (Change the default data)</h4>
                    <div className="form-group">
                        <input 
                            placeholder="First name"  className="input" 
                            name="firstname" datatype="personal"
                            onChange={handleChange} defaultValue={firstname}
                        />
                        <input 
                            placeholder="Last name" className="input"
                            name="lastname" datatype="personal" 
                            onChange={handleChange}  defaultValue={lastname}
                        />
                    </div>
                    <input 
                        placeholder="Job position" className="input" 
                        name="jobposition" datatype="personal" onChange={handleChange} defaultValue={jobposition}
                    />
                    <textarea 
                        id="" cols="10" rows="5" 
                        className="input"
                        name="objective" datatype="personal" onChange={handleChange} defaultValue={objective}
                        placeholder="Objective">    
                    </textarea>
                </div>

                {/* Contact Information */}
                <div className="section sec-contact">
                    <h4>Contact information</h4>
                    <div className="form-group">
                        <input 
                            placeholder="Email address" className="input" name="email" 
                            datatype="contact" onChange={handleChange} 
                            defaultValue={email}
                        />
                        <input 
                            placeholder="Phone number" className="input" name="phonenumber" 
                            datatype="contact" onChange={handleChange} 
                            defaultValue={phonenumber}
                        />
                    </div>
                    <input 
                        placeholder="Current Address" className="input" name="address" 
                        datatype="contact" onChange={handleChange}
                        defaultValue={address}
                    />
                    <input 
                        placeholder="Website / github / Codepen / LinkedIn / " 
                        className="input" name="url" datatype="contact" onChange={handleChange}
                        defaultValue={url}
                    />
                </div>


                <div className="section skills">
                    <h4>Skills</h4>
                    <textarea name="" id="" cols="10" rows="7" className="input" placeholder="List of your skills.Use a comma to separate them."></textarea>
                </div>

                <div className="section sec-contact">
                    <h4>Work History</h4>
                    <input placeholder="Job position" className="input"/>
                    <input placeholder="Company or employer" className="input"/>
                    <div className="form-group">
                        <input placeholder="Start date, Eg:(02/2020)" className="input"/>
                        <input placeholder="End date, Eg:(04/2024)" className="input"/>
                    </div>
                    <textarea name="" id="" cols="10" rows="5" className="input" placeholder=" Short description about the work"></textarea>
                </div>


                {/* Eduction */}
                <div className="section sec-contact">
                    <h4>Eduction</h4>
                    <div className="educations">
                        <div className="line active">
                            <h4>BS: Computer Science</h4>
                            <span className="fa fa-close"></span>
                        </div>
                        <div className="line active">
                            <h4>Sate diploma: Litterature</h4>
                            <span className="fa fa-close"></span>
                        </div>
                    </div>
                    <input placeholder="College | University" className="input"/>
                    <input placeholder="Degree obtained" className="input"/>
                    <div className="form-group">
                        <input placeholder="Start date, Eg:(02/2020)" className="input"/>
                        <input placeholder="End date, Eg:(04/2024)" className="input"/>
                    </div>
                    <textarea name="" id="" cols="10" rows="5" className="input" placeholder=" Short description about the education"></textarea>
                </div>

                <button className="button b-blue" onClick={saveChange}>
                    <span className="fa fa-save b-none "></span> Save Changes
                </button>
            </form>
        </div>
    )
}