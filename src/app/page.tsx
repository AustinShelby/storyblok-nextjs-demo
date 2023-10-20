import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchHomePage = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    resolve_relations: "recommended_tours.tours",
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.story;
};

const Home = async () => {
  const story = await fetchHomePage();
  return <StoryblokStory story={story} />;
};

export default Home;
