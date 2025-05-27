import Product from "../Product/Product";
import Mailbox from "../Mailbox/Mailbox";
import Book from "../Book/Book";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";
import ClickCounterTogether from "../ClickCounterTogether/ClickCounterTogether";
import Several from "../Several/Several";
import UserMenu from "../UserMenu/UserMenu";
import OrderBilliForm from "../OrderBilliForm/OrderBilliForm";
import SearchForm from "../SearchForm/SearchForm";
import type { Article } from "../../types/article";
import ArticleList from "../ArticleList/ArticleList";
import { ClipLoader } from "react-spinners";
import { fetchArticles } from "../../services/articleService";
//const myKey = import.meta.env.VITE_API_KEY;
import OrderForm from "../OrderForm/OrderForm";
import Timer from "../Timer/Timer";
import Modal from "../Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPerson = async () => {
  const response = await axios.get("https://swapi.info/api/people/1");
  return response.data;
};

export default function App() {
  const {
    data,
    error,
    isLoading: isQueryLoading,
    isError: isQueryError,
  } = useQuery({
    queryKey: ["person"],
    queryFn: () => fetchPerson(),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleOrder = (data: string) => {
    console.log("Order reseived from:", data); // можна зберегти замовлення, викликати API, показати повідомлення тощо
  };
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      // 2. Використовуємо HTTP-функцію
      const data = await fetchArticles(topic);
      setArticles(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  // 2. Оголошуємо стан clicks
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const handleClick = () => {
    // 3. Використовуємо setClicks для зміни стану clicks
    setClicks(clicks + 1);
  };
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("First updated:", first);
  }, [first]);

  useEffect(() => {
    console.log("Second updated:", second);
  }, [second]);

  useEffect(() => {
    console.log("First or second updated:", first + second);
  }, [first, second]);

  return (
    <>
      {isQueryLoading && <p>Loading...</p>}
      {isQueryError && <p>An error occurred: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <div>
        <h1>Main content of the page</h1>
        <button onClick={openModal}>Open Modal</button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <h2>Custom Modal Content</h2>
            <p>This is a reusable modal with dynamic content.</p>
          </Modal>
        )}
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide timer" : "Show timer"}
      </button>
      {isOpen && <Timer />}
      <div>
        <h1>Products</h1> <UserMenu name="GoMortarBoard" />
        <Product
          name="Tacos With Lime"
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
          price={10.99}
        />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
          price={14.29}
        />
        <OrderForm />
      </div>
      <OrderBilliForm onSubmit={handleOrder} />
      <Mailbox
        username="John"
        messages={["Welcome!", "Don't miss our sale!"]}
      />
      <SearchForm onSubmit={handleSearch} />
      {/* indicator zagruzki */}
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <ClipLoader size={50} color="#36d7b7" />
        </div>
      )}
      {isError && <p>Whoops, something went wrong Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleClick}>Current: {clicks}</button>
      <ClickCounter />
      <ClickCounter />
      <ClickCounterTogether value={clicks} onUpdate={handleClick} />
      <ClickCounterTogether value={clicks} onUpdate={handleClick} />
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
      <button onClick={() => setFirst(first + 1)}>First: {first}</button>
      <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
      <Several />
      <Book />
    </>
  );
}
