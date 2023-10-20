import { renderRichText } from "@storyblok/react/rsc";
import ReactDOMServer from "react-dom/server";
import { Testimonial } from "./Testimonial";
import { storyblokEditable } from "@storyblok/react/rsc";

export const Tour = (params: any) => {
  return (
    <main {...storyblokEditable(params.blok)} className="component pt-32 pb-16">
      <h1 className="text-3xl md:text-5xl font-bold">
        {"Taiwan Walking Tour"}
      </h1>
      <img className="mt-12" src={params.blok.main_image.filename} alt="" />
      <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">
        {params.blok.introduction}
      </p>
      <div
        className="prose md:prose-lg mt-16 max-w-none"
        dangerouslySetInnerHTML={{
          __html: renderRichText(params.blok.body, {
            resolver: (component, data) => {
              switch (component) {
                case "testimonial":
                  return ReactDOMServer.renderToStaticMarkup(
                    <div className="not-prose max-w-xl mx-auto my-16">
                      <Testimonial blok={data} />
                    </div>
                  );
              }
            },
          }),
        }}
      ></div>
    </main>
  );
};
