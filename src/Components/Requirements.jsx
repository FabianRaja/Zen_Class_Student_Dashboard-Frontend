export default function Requirements({name,ctc,deadline,website,role,nature,opening,program}){
    return(
        //requirements card component to map using prop values
        <div className="card requirements-section">
            <div className="card-body requirement-section">
                <div className="row justify-content-start">
                <div className="col-3">
                <h5 className="row justify-content-start">{name}</h5>
                <h5 className="row justify-content-start">{website}</h5>
                </div>
                <div className="col-3">
                <h5 className="row justify-content-start">Role: {role}</h5>
                <h5 className="row justify-content-start">CTC: {ctc}</h5>
                </div>
                <div className="col-3">
                <h5 className="row justify-content-start">Nature of Job: {nature}</h5>
                <h5 className="row justify-content-start">Openings: {opening}</h5>
                </div>
                <div className="col-3">
                <h5 className="row justify-content-start">Deadline: {deadline}</h5>
                <h5 className="row justify-content-start">Program: {program}</h5>
                </div>
                </div>
            </div>
            </div>
    )
}