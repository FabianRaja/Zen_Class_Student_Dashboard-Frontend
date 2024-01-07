export default function Placement({studentName,branch,companyName,ctc,placedBy}){
    return(
        //placement card component to map using prop values
        <div className="card placement-section">
            <div className="card-body">
                <div className="row">
                <div className="col">
                <h5>{studentName}</h5>
                <h5>{branch}</h5>
                </div>
                <div className="col">
                <img className="placement-png-image" src="https://www.zenclass.in/static/media/user.8d49e377.png"/>
                </div>
                </div><hr/>
                <div className="row">
                <div className="col">
                <h5>Company:{companyName}</h5>
                <h5>Current CTC: {ctc}</h5>
                <h5>Placed Through: {placedBy}</h5>
                </div>
                </div>
            </div>
            </div>
    )
}