export default async function FaqPage() {
    const API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    const response = await fetch(API_URL);
    const data = await response.json();

    interface dados {
        question: string,
        answer: string
    }

    return (
        <div>
            <h1>Página FAQ</h1>
            <ul>
                {data.map(({ question, answer }: dados) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}
