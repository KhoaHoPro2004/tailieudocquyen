export enum FileType {
  DOCUMENT = 'DOCUMENT',
  PRESENTATION = 'PRESENTATION',
  IMAGE = 'IMAGE',
}

export interface Folder {
  id: string;
  name: string;
  href: string;
}

export interface FileItem {
  id:string;
  name: string;
  href: string;
  type: FileType;
}