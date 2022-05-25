
export default function Form() { 
    return(
        <div className="appForm">
            <form>
                <div className="section-header">
                    <h4>Personnal information</h4>
                    <div className="form-group">
                        <input placeholder="First name"/>
                        <input placeholder="Last name"/>
                    </div>
                    <input placeholder="Job position"/>
                </div>
            </form>
        </div>
    )
}