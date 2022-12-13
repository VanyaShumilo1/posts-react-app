import PostItem from "./components/PostItem";
import {useMemo, useState} from "react";
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

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        console.log('called')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <PostForm createPost={createPost}/>

            <div className="line"></div>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={"Search..."}
            />

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
                sortedAndSearchedPosts.length !== 0
                    ? <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={"Posts list about js"}/>
                    : <h1 style={{textAlign: 'center'}}>Posts not found :(</h1>
            }


        </div>
    );
}

export default App;
