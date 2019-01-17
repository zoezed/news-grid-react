//News page built with React by Zoe Z
import React from 'react'
import { testApi } from '../utils/api'
import { NewsItem } from './NewsItem'

class App extends React.Component {   
    state = {
        newsLoc: "us",
        loading: true,
        newsOb : []
    }

    componentDidMount() {
        this.getNews();
    }

    getNews() {
        testApi().then((res) => {
            this.setState(() => ({
                newsOb: res,
                loading: false
            }))
        })
        
    }    

    render() {

        const { newsOb, loading } = this.state
        
        return (
            loading === true
                ? <div>load</div>
                :<div className='container'>
                    <div className='news-container'>
                        {newsOb.articles.map((newItem) => {
                            return <NewsItem item={newItem} key={newItem.url} />
                        })}
                    </div>
                </div>
        )
    }

}

export default App;