import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-[90%] m-auto'>
                <br />
                 <p>Q1) What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                 <p>Answer: An access token contain security credentials issued by an authentication server upon successful user authentication. It gives user access to protected resources after successful athentication. Access token are usually short-lived. A refresh token is a credential used to obtain a new access token after the original access token expires. It is typically long-lived compared to access tokens and is securely stored on the client-side. The way access token work is clients include the access token in requests to the server, which validates it and grants or denies access to the requested resource accordingly.The way refresh token works is when an access token expires, the client sends the refresh token to the authorization server. The authorization server verifies the refresh token's validity and issues a new access token if valid. This process allows the client to maintain continuous access to protected resources without requiring the user to reauthenticate. Refresh token is stored in HTTP cookie whereas, access token can be stored in localstorage, sessionStorage or HTTP cookie</p><br />
                 <p>Q2) Compare SQL and NoSQL databases?</p>
                 <p>Answer: SQL databases use the SQL query language for data manipulation and retrieval, which is standardized and widely supported.NoSQL databases may use different query languages depending on the database type and model. SQL databases are relational databases, meaning they organize data into tables with rows and columns. NoSQL databases are non-relational and offer a flexible data model, allowing for storage of unstructured, semi-structured, and structured data. SQL databases can handle increased workload by adding more CPU, RAM, or storage to a single server. NoSQL databases are horizontally scalable, allowing for distribution of data across multiple servers or nodes, making them better suited for handling large-scale applications and big data. SQL databases are well-suited for applications requiring complex queries, transactions, and strong consistency guarantees, such as financial systems, e-commerce platforms, and traditional relational data. NoSQL databases are better suited in scenarios involving large volumes of rapidly changing data, distributed architectures, and real-time analytics, such as social media platforms, IoT applications, and content management systems.   </p><br />

                 <p>Q3) What is express js? What is Nest JS ?</p>
                 <p>Answer: Express.js is a backend nodejs web application framework used for building restful APIs. Next js is an open-source React framework used for building server-side rendered web application. </p> <br />

                 <p>Q4) What is MongoDB aggregate and how does it work?</p>
                 <p>Answer: MongoDB's aggregate function is a feature that allows for data aggregation operations to be performed on collections within a MongoDB database. It provides a flexible and efficient way to process and analyze data.The aggregate function takes an array of stages as its argument, where each stage represents a specific operation to be applied to the data. These stages can include various operations such as filtering, grouping, sorting, projecting, joining, and performing mathematical computations. The aggregation pipeline processes documents sequentially, with the output of each stage serving as the input for the next stage. This allows for the creation of complex data transformation pipelines to meet various analytical and reporting requirements.</p> <br />
            </div>
        </div>
    );
};

export default Blog;