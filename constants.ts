import { Folder, FileItem, FileType } from './types';

export const FOLDERS: Folder[] = [
  { id: '1', name: 'Du lịch', href: 'https://drive.google.com/drive/folders/1mTu5JlKO6J8ah8iB1PcRMLkaKjoQYGWS?usp=sharing' },
  { id: '2', name: 'Tâm Lý Học', href: 'https://drive.google.com/drive/folders/1ikR-Qvehl3N7vax7I-GdAzucL3C_7L4X?usp=drive_link' },
  { id: '3', name: 'Công nghệ Thông Tin', href: 'https://drive.google.com/drive/folders/10julfsHx58bTfMXr0jRsngLnIr29x2Q5?usp=drive_link' },
  { id: '4', name: 'Đại cương', href: 'https://drive.google.com/drive/folders/1YRhpHBT0KD2QaOhf4H6hj307hyW7D3PH?usp=sharing' },
  { id: '5', name: 'Đông phương học', href: 'https://drive.google.com/drive/folders/1WI9c8kXqPQwM3BgpERNobXcBLw6ZmDT5?usp=sharing' },
  { id: '6', name: 'Kinh tế - quản trị và kế toán - tài chính', href: 'https://drive.google.com/drive/folders/17X0I0HqtnOn2ivaAS4huZ6NaiHSqmsG5?usp=drive_link' },
  { id: '7', name: 'Kỹ thuật - công nghệ', href: 'https://drive.google.com/drive/folders/1Szwn46M38ijtWTDEzP2tmPlYStJVALyx?usp=sharing' },
  { id: '8', name: 'Mục quan trọng (wifi - chuẩn đầu ra - quy định)', href: 'https://drive.google.com/drive/folders/1K0gYQsu7gm3RPtcCDUNMAJlhnPQQ8zAY?usp=drive_link' },
  { id: '9', name: 'Nghệ thuật', href: 'https://drive.google.com/drive/folders/1HqNbKaghJ6Z7HkbSXuq3yyjjfLZ7RiHz?usp=drive_link' },
  { id: '10', name: 'Ngoại ngữ', href: 'https://drive.google.com/drive/folders/1578SbxWERaxrE-VmG7du3ExesRMqYDEy?usp=drive_link' },
  { id: '11', name: 'Ôn tin chỉ đầu ra', href: 'https://drive.google.com/drive/folders/1nj6Lm1p1EN0HvdyEL17Pj58Ta_lyHxtM?usp=sharing' },
  { id: '12', name: 'Thuyết trình - Tiểu luận', href: 'https://drive.google.com/drive/folders/1t8wboO6jbohDyGdmG6RM1KeaClq9PGHo?usp=drive_link' },
  { id: '13', name: 'Xã hội - truyền thông', href: 'https://drive.google.com/drive/folders/1s7KVywVaNfMVITjhcCWDJ4SHSvFo5Su3?usp=sharing' },
  { id: '14', name: 'Y dược', href: 'https://drive.google.com/drive/folders/1BwEyS4hKUlk7nEEhe281uXZbX1PQYXlz?usp=drive_link' },
];

export const FILES: FileItem[] = [
    { id: 'f1', name: 'Hướng dẫn học hiệu quả...', href: 'https://docs.google.com/document/d/1K0MPxPnBkyIwj9Bc3eiYSqN5buPYw1StygIL_0dROTg/edit?usp=sharing', type: FileType.DOCUMENT },
    { 
      id: 'f2', 
      name: 'LỜI KHUYÊN CHÂN THÀNH', 
      href: 'https://drive.google.com/file/d/15hh97kfmYAfLsAYKV5k5rrbDdi11Rkyj/view?usp=drive_link', 
      type: FileType.IMAGE, 
    },
    { 
      id: 'f3', 
      name: 'Nhóm 3 còn rất nhiều slot', 
      href: 'https://drive.google.com/file/d/1st_lZUmWf6mF7IHyCWLUxlMTx7xGawzx/view?usp=drive_link', 
      type: FileType.IMAGE, 
    },
    { 
      id: 'f4', 
      name: 'QR NHÓM SĂN SALE', 
      href: 'https://drive.google.com/file/d/1xNJ_6XB7BJPM5-B301DoGyq0gNV9vOpI/view?usp=drive_link', 
      type: FileType.IMAGE, 
    },
    { 
      id: 'f5', 
      name: 'QR ủng hộ', 
      href: 'https://drive.google.com/file/d/18Z0bfNaVOmrRhzqsrt0ZvHndXbqP5GBv/view?usp=drive_link', 
      type: FileType.IMAGE, 
    }
];