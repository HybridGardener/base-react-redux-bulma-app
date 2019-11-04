import React from 'react'
import './style.scss';
import Edit from '../../images/vv/edit.svg'
const ListItem = ({ avatar, key, onClick, title, createdDate, complete }) => {
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
                    <img alt="edit" src={Edit} />

                </figure>
            </div>
        </article>
    )
}
export default ListItem; 