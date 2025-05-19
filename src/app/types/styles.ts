/* GENERAL STYLES */

export enum Align {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export enum Size {
  XSMALL = 'xsmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xlarge',
}

export enum MaxSize {
  DEFAULT = 'default',
  FILL = 'fill',
  ADJUST = 'adjust'
}

/* FONT STYLES */

export enum TitleType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
}

export enum FontWeight {
  THIN = 100,
  EXTRALIGHT = 200,
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 400,
  // MEDIUM = 500,
  SEMIBOLD = 500,
  // SEMIBOLD = 600,
  BOLD = 700,
  EXTRABOLD = 800,
}

/* FLEX STYLES */

export enum JustifyContent {
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
  BETWEEN = 'space-between',
  AROUND = 'space-around',
  EVENLY = 'space-evenly',
}

export enum AlignItems {
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
  STRETCH = 'stretch',
  BASELINE = 'baseline',
}

export enum FlexDirection {
  COLUMN = 'column',
  ROW = 'row',
}

export enum FlexWrap {
  WRAP = 'wrap',
  NOWRAP = 'nowrap',
}

/* IMAGE STYLES */

export enum ImageBehavior {
  FILL = 'fill',
  CONTAIN = 'contain',
  COVER = 'cover',
  NONE = 'none',
  SCALE_DOWN = 'scale-down',
}

export enum ImageOrientation {
  LANDSCAPE = 'landscape',
  PORTRAIT = 'portrait',
  SQUARE = 'square',
}

export enum ImageFit {
  PAD = 'pad',
  FILL = 'fill',
  SCALE = 'scale',
  CROP = 'crop',
  THUMB = 'thumb',
}

export enum ImageFocus {
  CENTER = 'center',
  TOP = 'top',
  RIGHT = 'right',
  LEFT = 'left',
  BOTTOM = 'bottom',
  TOP_RIGHT = 'top_right',
  TOP_LEFT = 'top_left',
  BOTTOM_RIGHT = 'bottom_right',
  BUTTOM_LEFT = 'bottom_left',
  FACE = 'face',
  FACES = 'faces',
}
