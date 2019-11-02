import React from 'react'
import { getSVG } from '../../helpers/util'

const BrandedOverlay = ({ brand }) => {
    if (!brand) return;
    const loading = getSVG(brand, 'loader');
    return (
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <figure class="image">
                    <img alt="branding" src={loading} />
                </figure>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
    )
}
export default BrandedOverlay