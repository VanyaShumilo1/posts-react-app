import PostItem from "./components/PostItem";
import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {useSortedPosts} from "./components/hooks/usePosts";
import axios from "axios";


function App() {

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "JavaScript",
            body: "Programming language JS"
        },
        {
            id: 2,
            title: "JavaScript",
            body: "Programming language JS"
        },
        {
            id: 3,
            title: "JavaScript",
            body: "Programming language JS"
        },
        {
            id: 4,
            title: "aaa",
            body: "zzz"
        },
        {
            id: 5,
            title: "zzz",
            body: "aaa"
        },
    ])
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = useSortedPosts(posts, filter.sort, filter.query)
    const [modalVisible, setModalVisible] = useState(false)
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalVisible(false)
    }

    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }

    const [darkMode, setDarkMode] = useState(true)


    return (

        <div className={"App"}>
            <div className="AppWrapper">
                {(darkMode) ? document.body.classList.add("dark") : document.body.classList.remove("dark")}
                <MyButton onClick={fetchPosts}>Load posts</MyButton>
                <MyButton onClick={() => setModalVisible(true)}>Add Post</MyButton>
                <div className={"toggleDarkMode"}>
                    <input id={"darkMode"} name={"darkMode"} type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
                    <label htmlFor="darkMode">Dark mode</label>
                </div>
                <MyModal visible={modalVisible} setVisible={setModalVisible}>
                    <PostForm createPost={createPost}/>
                </MyModal>

                <div className="line"></div>

                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                {
                    <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={"Posts list about js"}/>
                }

            </div>
        </div>
    );
}

export default App;
