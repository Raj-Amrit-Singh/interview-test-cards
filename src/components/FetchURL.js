import React, { Component } from 'react';
import { parse } from 'qs';
import queryString from 'query-string' // install this package 

const query = queryString.parse(location.hash.substr(2))  
let Cid=query.Cid;
let Sid=query.token;
 
console.log("id is "+ query.Cid+" token is: "+query.token)   ///             install package  and variable is query and use dot to fetch token and id 
/* 
const List = ({ location }) => {
    const query = queryString.parse(location.hash.substr(2))
   
    console.log(location);
    return (
        <div>
            <p>CID: {query.Cid}</p>
            <p>Sid: {query.token}</p>
        </div>
    )
} */
//export default List