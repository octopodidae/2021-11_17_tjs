import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
const initialState = {};
function TemplateName(props) {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        // effect
        return () => {
            // cleanup
        }
    }, [state])
    return (
        <div data-testid="TemplateName">
            TemplateName
        </div>
    )
}

TemplateName.propTypes = {

}

TemplateName.defaultProps = {

}

export default TemplateName

