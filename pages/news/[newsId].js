// example : our-domain.com/news/something-important

import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();
  const newsId =  router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId
  return (
    <div>
      <h1>This is DetailsPage</h1>
    </div>
  );
};

export default DetailsPage;
