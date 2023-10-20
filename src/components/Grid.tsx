import { StoryblokComponent } from "@storyblok/react/rsc";

export const Grid = (params: any) => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="component">
        <h2 className="text-3xl md:text-4xl font-bold">
          {params.blok.headline}
        </h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
          {params.blok.items.map((blok: any) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};
