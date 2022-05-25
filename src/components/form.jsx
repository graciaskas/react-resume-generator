
export default function Form() { 
    return(
        <div className="appForm">
            <form>
                <div className="section sec-useinfo">
                    <h4>Personnal information</h4>
                    <div className="form-group">
                        <input placeholder="First name" className="input"/>
                        <input placeholder="Last name" className="input"/>
                    </div>
                    <input placeholder="Job position" className="input"/>
                </div>
                <div className="section sec-contact">
                    <h4>Contact information</h4>
                    <div className="form-group">
                        <input placeholder="Email address" className="input"/>
                        <input placeholder="Phone number" className="input"/>
                    </div>
                    <input placeholder="Current Address" className="input"/>
                    <input placeholder="Website / github / Codepen / LinkedIn / " className="input"/>
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

                <button className="button b-blue">
                    <span className="fa fa-save b-none "></span> Save Changes
                </button>
            </form>
        </div>
    )
}