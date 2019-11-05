import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import Slider from '../Slider'
import ListItem from '../ListItem';
import Tile from '../Tile';
import ProgressBar from '../ProgressBar'
import { getSVG } from '../../helpers/util'

const Dashboard = ({ title, brandedTheme }) => {
    const [sliderValue, setSliderValue] = useState(0);
    const avatar = getSVG(brandedTheme, 'placeholder');
    return (
        <div className="dashboard">
            <div className="box">
                <div className="columns is-multiline is-mobile is-touch is-desktop">
                    <div className="column">
                        <Tile titleId="dashboard.tile1Title" subtitleId="dashboard.tile1Subtitle">
                            <Slider step={1}
                                min={0}
                                max={100}
                                value={sliderValue}
                                onChange={(e) => setSliderValue(e.target.value)}
                                name={"slider"}
                                id={"dashboard.slider"}
                            />
                        </Tile>
                    </div>
                    <div className="column">
                        <Tile titleId="dashboard.tile2Title"
                            subtitleId="dashboard.tile2Subtitle">
                            <ProgressBar min={0}
                                max={100}
                                value={sliderValue}
                                name="progress1"
                                className="progress is-primary"
                                id={"dashboard.tile2ProgressBar"}
                            />
                        </Tile>
                    </div>
                    <div className="column">
                        <Tile titleId="dashboard.tile3Title" subtitleId="dashboard.tile3Subtitle">
                        </Tile>
                    </div>
                    <div className="column">
                        <Tile titleId="dashboard.tile4Title" subtitleId="dashboard.tile4Subtitle">

                        </Tile>
                    </div>
                </div>
            </div>
            <div className="box">
                <ListItem avatar={avatar} title={"Clean out basement"} createdDate={"10/21/2019 02:11:01"} complete={true} name="p1" />
                <ListItem avatar={avatar} title={"Mow the Lawn"} createdDate={"10/21/2019 02:11:01"} complete={false} name="p2" />
                <ListItem avatar={avatar} title={"Pay Rent"} createdDate={"10/21/2019 02:11:01"} complete={true} name="p3" />
            </div>
        </div >
    )
}
Dashboard.propTypes = {
    title: PropTypes.string.isRequired,
    brandedTheme: PropTypes.string.isRequired,
}
export default Dashboard;