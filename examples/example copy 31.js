'use client'

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export function Example31() {
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