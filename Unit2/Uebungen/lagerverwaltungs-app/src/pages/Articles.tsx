import React from 'react'
import {Article, articles} from '../data/mockData'

// Artikelseite - zeigt alle Artikel in einer Tabelle an
function Articles(): React.ReactElement {
    return (
        <div>
            <h1 className="page-title">Artikel</h1>
            <p className="page-subtitle">Alle Lagerartikel im Ueberblick</p>
            <table>
                <thead style={{
                    width: "100%"
                }}>
                <tr>
                    <td>Name</td>
                    <td>Article Number</td>
                    <td>Category</td>
                    <td>Location</td>
                    <td>Stock</td>
                    <td>Minimum Stock</td>
                    <td>Status</td>
                </tr>
                </thead>
                <tbody>
                {articles.map(a => <ArticleElement article={a} key={a.id}/>)}
                </tbody>
            </table>
        </div>
    )
}

const ArticleElement = (props: { article: Article }) => {
    return <tr>
        <td>{props.article.name}</td>
        <td>{props.article.articleNumber}</td>
        <td>{props.article.category}</td>
        <td>{props.article.location}</td>
        <td>{props.article.stock}</td>
        <td>{props.article.minStock}</td>
        <td>{props.article.status}</td>
    </tr>
}

export default Articles
