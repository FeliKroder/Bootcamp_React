import Card from "./components/Card";

export default function App() {
  const fruits = [
    { name: "🥥 coconut", id: 0, color: "brown" },
    { name: "🥭 mango", id: 1, color: "orange" },
    { name: "🥑 Avocado ", id: 2, color: "darkgreen" },
    { name: "🥝 Kiwi", id: 3, color: "lightgreen" },
    { name: "🍍 Ananas", id: 4, color: "yellow" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
