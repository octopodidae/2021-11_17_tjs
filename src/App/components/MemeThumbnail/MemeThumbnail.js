import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeThumbnail.module.scss';
import { connect } from "react-redux";
import MemeViewer from '../MemeViewer/MemeViewer';
import FlowLayout from '../FlowLayout/FlowLayout';

const MemeThumbnail = (props) => {
  console.log(props);
  return(
  <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
    <FlowLayout>
      {props.memes.map((e,i)=><MemeViewer
        meme={e}
        image={props.images.find(img=>img.id===e.imageId)}
      />)}
    </FlowLayout>
  </div>
  )
}


MemeThumbnail.propTypes = {
 memes: PropTypes.array.isRequired,
 images: PropTypes.array.isRequired,
};

MemeThumbnail.defaultProps = {};

function mapStateToProps(state,own){
  return {
    ...own,
    memes:state.ressources.memes,
    images:state.ressources.images
  }
}
function mdtp(params) {
  return{}
}

export default connect(mapStateToProps,mdtp)( MemeThumbnail);
