import React from 'react'
import { getSVG } from '../../helpers/util'
const ListItem = ({ brand, avatar, key, onClick, onEditClick, title, createdDate, complete }) => {
    const Edit = getSVG(brand, 'edit');
    return (
        <article className="media card listItem" key={key} onClick={onClick}>
            <figure className="media-left">
                <p className="image is-64x64">
                    <img alt="avatar" src={avatar} />
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p> <strong className="title">{title}</strong></p>
                    <p>  <small>{createdDate}</small></p>
                    <div className="tag is-dark">{complete ? "Complete" : "TODO"}</div>
                </div>
            </div>
            <div className="media-right">
                <figure className="image is-24x24">
                    <img alt="edit" src={Edit} onClick={onEditClick} />

                </figure>
            </div>
        </article>
    )
}
export default ListItem; 