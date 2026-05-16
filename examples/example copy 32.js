'use client'

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

export function Example32() {
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
          name="Фото Там"
        />
      </ul>
    </section>
  );
}