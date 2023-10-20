import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

const TourPage = async (props: any) => {
  const story = await fetchTourPage(props.params.slug);
  return <StoryblokStory story={story} />;
};

export default TourPage;
