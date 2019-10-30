import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import Slider from '../Slider'
import ListItem from '../ListItem';
import Tile from '../Tile';
import avatar from '../../images/placeholder.png'
import ProgressBar from '../ProgressBar'
const Dashboard = ({ title }) => {
    const [sliderValue, setSliderValue] = useState(0);

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">One</p>
                                <p className="subtitle">Subtitle</p>
                            </article>
                        </div>
                        <Tile titleId="dashboard.tile1Title" subtitleId="dashboard.tile1Subtitle">
                            <Slider step={1}
                                min={0}
                                max={100}
                                value={sliderValue}
                                onChange={(e) => setSliderValue(e.target.value)}
                                name={"slider"}
                                id={"dashboard.slider"} />
                        </Tile>
                        <Tile titleId="dashboard.tile2Title"
                            subtitleId="dashboard.tile2Subtitle">
                            <ProgressBar min={0}
                                max={100}
                                value={sliderValue}
                                className="progress is-primary"
                                id={"dashboard.tile2ProgressBar"} />
                        </Tile>
                        <Tile titleId="dashboard.tile3Title" subtitleId="dashboard.tile3Subtitle">

                        </Tile>
                        <Tile titleId="dashboard.tile4Title" subtitleId="dashboard.tile4Subtitle">

                        </Tile>

                    </div>
                    <div className="box">
                        <ListItem avatar={avatar} title={"Clean out basement"} createdDate={"10/21/2019 02:11:01"} complete={true} />
                        <ListItem avatar={avatar} title={"Mow the Lawn"} createdDate={"10/21/2019 02:11:01"} complete={false} />
                        <ListItem avatar={avatar} title={"Pay Rent"} createdDate={"10/21/2019 02:11:01"} complete={true} />


                    </div>

                </div>
            </section>
        </>

    )
}
Dashboard.propTypes = {
    title: PropTypes.string.isRequired
}
export default Dashboard;