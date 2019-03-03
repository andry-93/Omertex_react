import React from 'react';

export default function Home() {
  return (
    <section className="full-section">
      <h1>Omertex</h1>
      <h2>Техническое задание</h2>
      <p>
        <span>Разработка web-страницы с использованием </span>
        <strong>ReactJS</strong>
      </p>
      <p>На странице должно быть реализовано:</p>
      <ol>
        <li>Список товаров.</li>
        <li>Товар должен иметь атрибуты: “Название”, “Изображение”, “Цена”.</li>
        <li>По клику на товар, он должен разворачиваться. В развернутом виде отображается дополнительная информация о товаре (краткое описание, в наличии или под заказ). При повторном клике, дополнительная информация должна сворачиваться.</li>
        <li>Текстовое поле для фильтрации товаров.</li>
      </ol>
      <p><i>*Визуальное оформление на усмотрение исполнителя.</i></p>
    </section>
  );
}
