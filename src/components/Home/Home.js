import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./../../firebase/firebaseConfig";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const Home = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [articles, setArticles] = useState([]);
  const auth = getAuth(app);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      console.log("user: ", user);
      setIsLogged(true);
    }
  }, []);

  const getArticles = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "articles"));
    const tab = [];
    querySnapshot.forEach((doc) => {
      tab.push(doc.data());
    });
    setArticles(tab);
  };

  useEffect(() => {
    getArticles();
  }, [isLogged]);

  if (isLogged) {
    return (
      <>
        <h1>Artykuły</h1>
        {articles.map((el, idx) => (
          <div key={idx}>
            <h2>{el.title}</h2>
            <p>{el.photo}</p>
            <p>{el.text}</p>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        <h1>Home</h1>
        <h3>Zaloguj się</h3>
      </>
    );
  }
};

export default Home;
