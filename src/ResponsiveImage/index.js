import React from 'react';

const ResponsiveImage = (props) => {
  const { className, data } = props;
  const { assetUrl, dimensions, alt } = data;

  const updatePath = (path, singleDimensionObject) => {
    const { aspectRatio, method, width } = singleDimensionObject;
    return path.replace('upload', `upload/ar_${aspectRatio},c_fill,g_auto/c_${method},w_${width}`);
  };

  const generateSrcSet = (path, imageDimensionsArray) => {
    const returnValue =  imageDimensionsArray.map((singleDimension, index, arr)=> {
        const { width } = singleDimension;
        return index !== arr.length - 1 ? updatePath(path, singleDimension) + ` ${width}w,` : updatePath(path, singleDimension) + ` ${width}w`
      }).join(' ');
    return returnValue;
  };

  return (
   	<picture className={className}>
   		{dimensions.map((dimensionsObj, index, arr) => {
   			const { imageDimensions, sizes, media } = dimensionsObj;
   			return index !== arr.length - 1 ?
   			<source
   				media={media}
   				sizes={sizes}
   				srcSet={generateSrcSet(assetUrl, imageDimensions)}
          key={index}
   			/> :

        <img
  				sizes={sizes}
  				srcSet={generateSrcSet(assetUrl, imageDimensions)}
  				src={updatePath(assetUrl, imageDimensions[imageDimensions.length - 1])}
  				alt={alt}
          key={index}
  			/>;
   		})}
    </picture>
  );
};

ResponsiveImage.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default ResponsiveImage;
