'use client'

function Item({ name, isPacked }) {
    if (isPacked) {
      return null;
    }
    return <li className="item">{name}</li>;
  }

export function Example30() {
  return (
    <section>
      <h1>Список вещей Салли Райд</h1>
      <ul>
        <Item
          isPacked={true}
          name="Космический скафандр"
        />
        <Item
          isPacked={true}
          name="Шлем с золотым листом"
        />
        <Item
          isPacked={false}
          name="Фотография Там"
        />
      </ul>
    </section>
  );
}