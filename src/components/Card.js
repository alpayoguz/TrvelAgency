export default function Card(props){
    

    return(
        <>

        <div className="card">
            <div className="img-container" >
                <img src={props.imageUrl} alt="" className="card-img" />
             </div>
            <div className="card-info" >
                <div className="card-location">
                 <span><img src="/assets/images/Fill219.png" alt="navigation-svg"/></span>
                 <span>{props.location}</span>
                 <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card-text">
                    <h3 className="text-header">{props.title}</h3>
                    <div className="text-date">
                    <span className="date-start">{props.startDate} - </span> <span className="date-end">{props.endDate}</span>
                    </div>
                    <p className="text-desc">{props.description}</p>
                </div>
            </div>
        </div>

    </>

    )

   

}