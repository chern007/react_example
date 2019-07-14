import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        posts: []
    }

    componentDidMount = async () => {

        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");

        const respJson = await resp.json();

        this.setState({

            posts: respJson

        });

        console.log(respJson);

    }


    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => {


                        return <div key={post.id}>

                            <h1>{post.title}</h1>
                            <p>{post.body}</p>

                        </div>

                    })


                }
            </div>
        )
    }
}
