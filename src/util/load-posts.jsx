
export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://dog.ceo/api/breeds/image/random');

    const [posts, photos ]= await Promise.all([postsResponse, photosResponse])

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post) => {
        return { ...post, cover: photosJson.message}
    })
    
    return postsAndPhotos;
}