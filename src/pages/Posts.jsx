import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import MyButton from "../components/UI/buttons/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Paginations from "../components/UI/pagination/Paginations";
import {usePosts} from "../hooks/usePosts";
import {getPagesCount} from "../utils/pages";
import PostService from "../API/PostService";


function Posts() {

    const [posts, setPosts] = useState([])
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modalVisible, setModalVisible] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalVisible(false)

    }

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })


    useEffect(() => {
        fetchPosts()
    }, [page])

    const changePage = (page) => {
        setPage(page)
    }

    const [darkMode, setDarkMode] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    return (

        <div className={"App"}>
            <div className="AppWrapper">
                {(darkMode) ? document.body.classList.add("dark") : document.body.classList.remove("dark")}
                <MyButton onClick={() => setModalVisible(true)}>Add Post</MyButton>
                <div className={"toggleDarkMode"}>
                    <input id={"darkMode"} name={"darkMode"} type="checkbox" checked={darkMode}
                           onChange={() => setDarkMode(!darkMode)}/>
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
                    postError && <h1>Error: {postError}</h1>
                }

                {
                    isPostsLoading
                        ? <div className="centerLoader"><Loader/></div>
                        :
                        <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={"Posts list about js"}/>
                }

                <Paginations
                    page={page}
                    totalPages={totalPages}
                    changePage={changePage}
                />

            </div>
        </div>
    );
}

export default Posts;
