const ProfileCard = (props) => {
    return (
        <div className="col-md-3">
            <div className="card p-3 border-0 d-flex flex-column align-items-center">
                <div className="card-img-top rounded-circle" style={{
                    width: '250px',
                    height: '250px',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    <img style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${props.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} />
                </div>
                <div className="card-body mt-2">
                    <b>{props.name}</b>
                    <p className="mt-2">{props.description}<a href={`mailto:${props.contact}`}>{props.contact}</a></p>
                </div>
            </div>
        </div>)
}
export default ProfileCard;