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
    authorId: 2,
    videoUrl: "/2.mp4",
    thumbnailUrl: "/video2.jpg",
    title: "Свадебное поздравление",
    subtitle: "Романтическая поэма"
  },
    {
    id: 3,
    authorId: 3,
    videoUrl: "/2.mp4",
    thumbnailUrl: "/video3.jpg",
    title: "Новогоднее поздравление",
    subtitle: "Родителям от сына"
  },
];