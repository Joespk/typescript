interface postedByresponsr {
  id: string;
  username: string;
  name: string;
  registeredAt: string;
}

interface ContentpostedByresponsr {
  data: postedByresponsr[];
}

interface Content {
  id: number;
  videoTitle: string;
  videoUrl: string;
  comment: string;
  rating: number;
  thumbnailUrl: string;
  creatorName: string;
  creatorUrl: string;
  postedBy: postedByresponsr;
  createdAt: string;
  updatedAt: string;
}

interface ContentListResponse {
  data: Content[];
}

const result: ContentListResponse = {
  data: [
    {
      id: 1,
      videoTitle: "ฉลามชอบงับคุณ - Bonnadol Feat IIVY B [Official MV]",
      videoUrl: "https://www.youtube.com/watch?v=IkxhsTwNybU",
      comment: "แนะนำเลยครับ",
      rating: 5,
      thumbnailUrl: "https://i.ytimg.com/vi/IkxhsTwNybU/hqdefault.jpg",
      creatorName: "Bonnadol",
      creatorUrl: "https://www.youtube.com/c/bonnadol",
      postedBy: {
        id: "b9e1a5c5-ff16-4e50-8bb3-cb76d8900f70",
        username: "john",
        name: "John Doe",
        registeredAt: "2022-01-01T00:00:00.000Z",
      },
      createdAt: "2022-01-01T00:00:00.000Z",
      updatedAt: "2022-01-01T00:00:00.000Z",
    },
  ],
};

console.log(result);
