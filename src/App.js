import PostItem from "./components/PostItem";
import {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/inputs/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


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
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [selectedSort, setSelectedSort] = useState('')

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm createPost={createPost}/>

            <div className="line"></div>

            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue={"Sort by"}
                options={[
                    {value: 'title', name: 'Title'},
                    {value: 'body', name: 'Description'},
                ]}

            />

            {
                posts.length !== 0
                    ? <PostList removePost={removePost} posts={posts} title={"Posts list about js"}/>
                    : <h1 style={{textAlign: 'center'}}>Posts not found :(</h1>
            }


        </div>
    );
}

export default App;
