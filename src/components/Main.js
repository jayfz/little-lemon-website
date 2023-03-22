import heroImage from  '../images/restauranfood.jpg'

export default function Main() {
  return (
    <main>
      <div className='hero'>
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranian restaurant focused on traditional
          recepies served with a modern twist
        </p>
        <button className='action-button'>Reserve a table </button>
      </article>
      <img src={heroImage} alt="a server holding plates in a tray" />
      </div>
    </main>
  );
}
