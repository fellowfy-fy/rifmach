interface Video {
  videoUrl: string;
  thumbnailUrl: string; 
  title: string;
  subtitle: string;
}

export const videos: Video[] = [
  {
    videoUrl: "/dog.mp4",
    thumbnailUrl: "/thumbnail1.png", 
    title: "Юбилей компании «Медси»",
    subtitle: "на мотив «Despacito»"
  },
  {
    videoUrl: "/video2.mp4",
    thumbnailUrl: "/video2-thumbnail.jpg", 
    title: "Второе видео",
    subtitle: "Описание второго видео"
  },
  {
    videoUrl: "/video1.mp4",
    thumbnailUrl: "/video1-thumbnail.jpg", 
    title: "Юбилей компании «Медси»",
    subtitle: "на мотив «Despacito»"
  },
  {
    videoUrl: "/video2.mp4",
    thumbnailUrl: "/video2-thumbnail.jpg", 
    title: "Второе видео",
    subtitle: "Описание второго видео"
  }
];