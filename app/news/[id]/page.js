export default async function NewsDetailPage({ params }) {
    const newsId = await params.id;
    return (
        <>
            <h1>News Detail Page</h1>
            <p>News ID: {newsId}</p>
        </>
    );
}