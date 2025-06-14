const Products = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {["T-Shirt", "Cargo Pants", "Oversized Tee"].map((item, index) => (
        <div key={index} className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
          <div className="h-40 bg-zinc-700 rounded-xl mb-4 animate-pulse"></div>
          <h2 className="text-xl font-semibold">{item}</h2>
          <p className="text-zinc-400">Premium quality, custom style</p>
        </div>
      ))}
    </section>
  );
};

export default Products;