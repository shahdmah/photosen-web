import HomeCard from "../components/HomeCard";

const CARDS = [
  {
    title: "Nature",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=60",
  },
  {
    title: "Portrait",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=60",
  },
  {
    title: "People",
    img: "https://images.unsplash.com/photo-1441123285228-1448e608f3d5?auto=format&fit=crop&w=1600&q=60",
  },
  {
    title: "Travel",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=60",
  },
  {
    title: "Architecture",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=60",
  },
  {
    title: "Animals",
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1600&q=60",
  },
  {
    title: "Sports",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=60",
  },
  {
    title: "Street",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=60",
  },
  {
    title: "Fashion",
    img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1600&q=60",
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="home-grid container">
        {CARDS.map((c) => (
          <HomeCard key={c.title} title={c.title} img={c.img} />
        ))}
      </section>
    </main>
  );
}
