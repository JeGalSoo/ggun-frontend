'use server'

export async function myArticleList(id: string): Promise<IArticle[] | { status: number }> {
    try {                            
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/adminArticles/myList?id=${id}`);
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IArticle[] = await response.json();
        if (data.length === 0) { return { status: 404 }; }

        console.log("myArticleList : " + JSON.stringify(data[0]))

        return data
    } catch (error) {
        console.log("loginAdmin err : " + error);
        return { status: 500 };
    }
}

export async function saveArticle(article: IArticle): Promise<IArticle | { status: number }> {
    console.log("saveArticle : " + JSON.stringify(article))
    const { title, content, writerId, boardId } = article || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/adminArticles/save`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title :title,
                content : content,
                writerId : writerId,
                boardId: boardId,
            })
        })
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IArticle = await response.json();
        if (data == null) { return { status: 404 }; }

        // console.log("myArticleList : " + JSON.stringify(data))

        return data
    } catch (error) {
        console.log("loginAdmin err : " + error);
        return { status: 500 };
    }
}

export async function fetchArticleDatail(id: string): Promise<IArticle | { status: number }> {
    try {                            
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/adminArticles/detail?id=${id}`);
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IArticle = await response.json();
        if (data == null) { return { status: 404 }; }

        console.log("myArticleList : " + JSON.stringify(data))

        return data
    } catch (error) {
        console.log("loginAdmin err : " + error);
        return { status: 500 };
    }
}
