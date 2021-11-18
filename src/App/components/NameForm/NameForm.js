import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
const initialState = {};
function NameForm(props) {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        // effect
        return () => {
            // cleanup
        }
    }, [state])
    return (
        <div data-testid="NameForm">
            NameForm
        </div>
    )
}

NameForm.propTypes = {

}

NameForm.defaultProps = {

}

export default NameForm

