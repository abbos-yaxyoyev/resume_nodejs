export enum ContentType {
  TEXT = 'text',
  VIDEO = 'video',
  IMAGE = 'img',
  LIST = 'list',
  LINK = 'link',
}

export enum Alignment {
  START = 'left',
  END = 'right',
  CENTER = 'center',
}

export enum ListIndicator {
  DOT = 'dot',
  NUMBER = 'number',
}

export interface SelfContaining {
  items: SelfContaining[];
}
