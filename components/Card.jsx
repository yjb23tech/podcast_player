import pencil_icon from "../public/images/pencil_icon.png"
import trash_icon from "../public/images/trash_icon.png"
import heart_icon from "../public/images/heart_icon.png"
import comment_icon from "../public/images/comment_icon.png"

const Card = (props) => {
    return (
        <div className="pp-card">
            <div className="pp-row-title">
                <h2>{props.pp_title}</h2>
                <div className="pp-edit-delete-icons">
                    <img src={pencil_icon} />
                    <img src={trash_icon} />
                </div>
            </div>
            <div className="pp-row-description">
                <p>{props.pp_description}</p>
            </div>
            <div className="pp-row-blank">

            </div>
            <div className="pp-row-like-comment-text">
                <p>{props.pp_number_of_likes}</p>
                <p>{props.pp_number_of_comments}</p>
            </div>
            <div className="pp-row-like-comment-icons">
                <img src={heart_icon} />
                <img src={comment_icon} />
            </div>
        </div>
    )
}

export default Card; 