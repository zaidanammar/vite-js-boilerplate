import { FileFilled } from '@ant-design/icons'
import { Button, Image, ImageProps } from 'antd'

import { detectFileTypeFromUrl } from '@/lib/utils/url/detectFileTypeFromUrl'

type PreviewImageProps = {
  src?: string
  alt: string
  documentLabelFallback?: string
  style?: React.CSSProperties
  imageProps?: ImageProps
}

const PreviewImage = ({
  src,
  alt,
  documentLabelFallback,
  style,
  imageProps,
}: PreviewImageProps) => {
  if (!src) {
    return null
  }

  if (detectFileTypeFromUrl(src) !== 'image') {
    return (
      <Button
        type="primary"
        icon={<FileFilled />}
        onClick={() => {
          window.open(src, '_blank')
        }}
      >
        {documentLabelFallback}
      </Button>
    )
  }

  return (
    <Image
      crossOrigin="anonymous"
      src={src}
      width="100%"
      alt={alt}
      {...imageProps}
      style={{
        borderRadius: '12px',
        maxWidth: '400px',
        maxHeight: '400px',
        ...style,
      }}
    />
  )
}

export default PreviewImage
