import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import Slider from '../Slider'
import ListItem from '../ListItem';
import Tile from '../Tile';
import ProgressBar from '../ProgressBar'
import { getSVG } from '../../helpers/util'

const Dashboard = ({ title, theme, brand }) => {
    const [sliderValue, setSliderValue] = useState(0);
    const avatar = getSVG(brand, 'placeholder')
    return (
        <div>
            <div className="box">
                <div className="tile is-ancestor">
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
                    <Tile titleId="dashboard.tile3Title" subtitleId="dashboard.tile3Subtitle">

                    </Tile>
                    <Tile titleId="dashboard.tile4Title" subtitleId="dashboard.tile4Subtitle">

                    </Tile>
                </div>
            </div>
            <div className="box">
                <ListItem brand={brand} avatar={avatar} title={"Clean out basement"} createdDate={"10/21/2019 02:11:01"} complete={true} />
                <ListItem brand={brand} avatar={avatar} title={"Mow the Lawn"} createdDate={"10/21/2019 02:11:01"} complete={false} />
                <ListItem brand={brand} avatar={avatar} title={"Pay Rent"} createdDate={"10/21/2019 02:11:01"} complete={true} />
            </div>
        </div >
    )
}
Dashboard.propTypes = {
    title: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired
}
export default Dashboard;