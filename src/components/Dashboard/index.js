import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import Slider from '../Slider'
import ListItem from '../ListItem';
const Dashboard = ({ title }) => {
    const [sliderValue, setSliderValue] = useState(0);
    const [progressValue, setProgressValue] = useState(0);

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <Slider step={1} min={0} max={100} value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} name="slider" id="dashboard.slider" />
                                <p className="title">One</p>
                                <p className="subtitle">Subtitle</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <progress class="progress is-primary" value={sliderValue} max={100}>{progressValue}</progress>
                                <p className="title">Two</p>
                                <p className="subtitle">Subtitle</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">Three</p>
                                <p className="subtitle">Subtitle</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">Four</p>
                                <p className="subtitle">Subtitle</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">Five</p>
                                <p className="subtitle">Subtitle</p>
                            </article>
                        </div>
                    </div>
                    <div>
                        <ListItem />
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