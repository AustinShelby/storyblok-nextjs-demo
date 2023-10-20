import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    resolve_relations: "recommended_tours.tours",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

export default async function Home() {
  const story = await fetchHomePage();
  return <StoryblokStory story={story} />;
}
