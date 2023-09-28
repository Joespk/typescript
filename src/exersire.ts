import axios from "axios";

interface Content {
  id: number;
  createdAt: string;
}

interface ContentListResponse {
  data: Content[];
}

const getContents = async () => {
  try {
    const response = await axios.get<ContentListResponse>(
      `https://api.learnhub.thanayut.in.th/content`
    );
    const contentList = response.data.data;

    const MapList = contentList.filter((value) => {
      if (
        new Date(value.createdAt).valueOf() <=
        new Date("2023-05-16T07:14:52.000Z").valueOf()
      )
        return value;
    });
    console.log(JSON.stringify(MapList, null, 2));
  } catch (error) {
    console.error(error);
  }
};

getContents();
