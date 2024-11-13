// constants/videos.ts
export interface Video {
  id: number;
  authorId: number;
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  subtitle: string;
}

export const videos: Video[] = [
  {
    id: 1,
    authorId: 1,
    videoUrl: "/dog.mp4",
    thumbnailUrl: "/thumbnail1.png",
    title: "Юбилей компании «Медси»",
    subtitle: "на мотив «Despacito»"
  },
  {
    id: 2,
    authorId: 1,
    videoUrl: "/2.mp4",
    thumbnailUrl: "/thumbnails/video2.jpg",
    title: "Свадебное поздравление",
    subtitle: "Романтическая поэма"
  },
];