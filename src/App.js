import PostItem from "./components/PostItem";
import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/inputs/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";


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

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        console.log('called')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    return (
        <div className="App">
            <PostForm createPost={createPost}/>

            <div className="line"></div>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {
                <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={"Posts list about js"}/>
            }


        </div>
    );
}

export default App;
