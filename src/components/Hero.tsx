export const Hero = (params: any) => {
  return (
    <section className="pt-32 pb-16 component">
      <h1 className="text-center text-5xl md:text-7xl font-bold">
        {params.blok.headline}
      </h1>
      <p className="text-center text-xl mt-8">{params.blok.content}</p>
    </section>
  );
};